/*
This is the template for a single club view.
*/
import React from 'react';

// Local modules.
import LayoutContained from './../../layouts/layout-contained/layout-contained';
import Layout2ColsUnequal from './../../layouts/layout-2col-unequal/layout-2col-unequal';
import Layout2Col from './../../layouts/layout-2col/layout-2col';

import './club-full.scss';

export default class Club extends React.Component {
  render() {
    const clubAction = <div className="button"> Become a member </div>;

    return (
      <LayoutContained className="club-full">
        <div className="club-full__header">
          <div className="club-full__cover-wrapper">
            <img
              src="#"
              alt="this is a club cover"
              className="club-full_wrapper"
            />
          </div>

          <div className="club-full__profile-picture-section">
            <div className="club-full__profile-picture-wrapper">
              <img
                src="https://d.ibtimes.co.uk/en/full/1477880/lemmy.jpg"
                alt="Club profile"
                className="club-full__profile-picture"
              />
            </div>
          </div>

          <div className="club-full__title-wrapper">
            <h1 className="club-full__title"> Club Title </h1>
            <h2 className="club-full__subtitle"> Club sub title </h2>
          </div>
        </div>

        <Layout2ColsUnequal inverse className="club-full__body">
          <div>
            {clubAction}
            <ul>
              <li>
                <a href="#passLinter"> Club location </a>
              </li>
              <li>
                <a href="#passLinter">
                  <span>github.com/</span>
                </a>
              </li>
              <li>
                <a href="#passLinter">
                  <span>http://</span>
                </a>
              </li>
              <li>
                <a href="#passLinter"> email@email.com </a>
              </li>
              <li> Meeting dates </li>
            </ul>
          </div>
          <div>
            <div>
              <h2> Description </h2>
              <p>
                The RIT Linux Users Group (RITlug) is a community of students
                and faculty at the Rochester Institute of Technology dedicated
                to teaching and sharing the Linux operating system and open
                source software with others. RITlug also works on various other
                projects, such as a Linux distribution customized for students
                and faculty at RIT.
              </p>
              <p>
                Meetings are open to anyone interested, new members and old.
                RITlug meets on every Friday, from 4:00PM until 6:00PM in
                GOL/70-2650 (Large DB Lab). If you can’t make the whole time,
                that’s fine! Meetings typically have a presentation first, then
                we open the floor to discussion and technical help. Interested?
                Just show up!
              </p>
              <p>Looking for more information? Email us!</p>
            </div>
            <div>
              <h2> Code of conduct </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae risus non orci feugiat vulputate quis non est. Mauris
                posuere, nulla id congue bibendum, nibh risus accumsan metus, at
                iaculis eros sem quis odio.
              </p>
              <p>
                Pellentesque gravida rhoncus erat, eu porta arcu ultrices eu.
                Vivamus quis fringilla ex. Pellentesque et mauris purus.
                Vestibulum at turpis non est condimentum vehicula. Nulla non
                vulputate sapien, aliquet commodo elit.
              </p>
              <p>
                Curabitur tempus ligula id nulla facilisis, quis gravida ante
                dictum. Ut tincidunt sed massa vel elementum. Donec commodo
                tellus maximus viverra dignissim. Vestibulum sollicitudin a erat
                vel imperdiet. Fusce at mi in nunc fermentum rutrum. Morbi
                tempor aliquam posuere. Mauris in commodo lectus, eget mollis
                neque. Maecenas sollicitudin nulla quis sapien ultricies, quis
                sagittis ante mattis. In tincidunt metus et nunc sollicitudin
                dignissim.
              </p>
            </div>
            <div>
              <h2> Members </h2>
              <Layout2Col>
                <div> member 1 </div>
                <div> member 2 </div>
              </Layout2Col>
            </div>
          </div>
        </Layout2ColsUnequal>
      </LayoutContained>
    );
  }
}
