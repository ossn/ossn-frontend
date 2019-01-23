import React from 'react';
import { PlusCircle } from 'react-feather';
import ReactMarkdown from 'react-markdown';

import clubCover from './../../../images/ClubCover.png';
import groupSmallImage from './../../../images/group-small.jpg';
import Layout2ColsUnequal from './../../layouts/layout-2col-unequal/layout-2col-unequal';
import LayoutContained from './../../layouts/layout-contained/layout-contained';
import Banner from './../banner/banner';
import ClubInfo from './../club-info/club-info';
import MemberList from './../member-list/member-list';
import Shape from './../shape/shape';

import './club-full.scss';

/*
This is the template for a single club view.
*/
// Local modules.
export default class Club extends React.PureComponent {
  // Infrastructure for logged in user handling.
  shouldCTAAppear() {
    return true;
  }

  render() {
    const club = { ...this.props.club };
    const clubMembers = [...this.props.club.users];

    const ctaPlaceholder = this.shouldCTAAppear() ? (
      <a href="/test" className="button club-full__cta">
        <span className="club-full__cta-icon">
          <PlusCircle />
        </span>
        Become a member of this club
      </a>
    ) : (
      ''
    );

    let membersSection = '';

    if (this.props.clubMembers && this.props.clubMembers.length > 0)
      membersSection = (
        <>
          <h2> Members </h2>
          <Shape
            waves
            darkSkyBlue
            className="club-full__members-shape club-full__members-shape--waves"
          />
          <MemberList members={clubMembers} />
        </>
      );

    return (
      <LayoutContained className="club-full">
        <div className="club-full__header">
          <div className="club-full__cover-wrapper">
            <Banner image={this.props.club.bannerImageUrl || clubCover} />
          </div>

          <div className="club-full__header-bottom">
            <div className="club-full__profile-picture-section">
              <div className="club-full__profile-picture-wrapper">
                <img
                  src={this.props.club.imageUrl || groupSmallImage}
                  alt="Club profile"
                  className="club-full__profile-picture"
                />
              </div>
            </div>

            <div className="club-full__title-wrapper">
              <h1 className="club-full__title"> {club.title} </h1>
              <span className="club-full__subtitle">
                {' '}
                Rochester Institute of Technology {club.subtitle}{' '}
              </span>
            </div>
          </div>
        </div>

        <Layout2ColsUnequal
          inverse
          horizontalGutters
          verticalGutters
          className="club-full__body"
        >
          <div className="club-full__info-container">
            {ctaPlaceholder}
            <ClubInfo club={club} />
          </div>
          <div className="club-full__description">
            <div>
              <ReactMarkdown
                source={this.props.club.description || 'Description is missing'}
              />
            </div>
          </div>
          <div className="club-full__members-section">{membersSection}</div>
        </Layout2ColsUnequal>
      </LayoutContained>
    );
  }
}
