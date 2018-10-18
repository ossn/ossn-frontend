/* eslint-disable */
import React from 'react';
import ReactMarkdown from 'react-markdown';

// local modules
import Layout2ColsUnequal from './../../layouts/layout-2col-unequal/layout-2col-unequal';
import Layout2Col from './../../layouts/layout-2col/layout-2col';

const source1 = `
Lorem ipsum dolor sit amet, et vim modo bonorum, has inani tractatos ne, scripta prodesset nam ei. Ea porro meliore gloriatur pro, ei rebum integre sea. Rebum laudem graece mea te, usu esse argumentum ut, sea persecuti incorrupte in. At nullam percipit pro. Populo nonumes ne nec, eu ius oratio moderatius.

Lorem ipsum dolor sit amet, et vim modo bonorum, has inani tractatos ne, scripta prodesset nam ei. Ea porro meliore gloriatur pro, ei rebum integre sea. Rebum laudem graece mea te, usu esse argumentum ut, sea persecuti incorrupte in. At nullam percipit pro. Populo nonumes ne nec, eu ius oratio moderatius.


[this is a link](#)

**this is bold**

_make this text italic_ this is not
`;

const source2 = `
Lorem ipsum dolor sit amet, et vim modo bonorum, has inani tractatos ne, scripta prodesset nam ei. Ea porro meliore gloriatur pro, ei rebum integre sea. Rebum laudem graece mea te, usu esse argumentum ut, sea persecuti incorrupte in. At nullam percipit pro. Populo nonumes ne nec, eu ius oratio moderatius.

Lorem ipsum dolor sit amet, et vim modo bonorum, has inani tractatos ne, scripta prodesset nam ei. Ea porro meliore gloriatur pro, ei rebum integre sea. Rebum laudem graece mea te, usu esse argumentum ut, sea persecuti incorrupte in. At nullam percipit pro. Populo nonumes ne nec, eu ius oratio moderatius.
`;

export default class Club extends React.Component {
  render() {

    const clubAction = <div className="button"> Become a member </div>;

    return (
      <div>

          <div>
            <div>
              <img src="#" alt="this is a club cover" />
            </div>
            <div>
              <img src="#" alt="Club profile" />
              <div>
                <h1> Club Title </h1>
                <h2> Club sub title </h2>
              </div>
            </div>
          </div>

          <Layout2ColsUnequal secondNarrow >
            <div>
              <div>
                <h2> Description </h2>
                <ReactMarkdown source={source1} />
              </div>
              <div>
                <h2> Code of conduct </h2>
                <ReactMarkdown source={source2} />
              </div>
              <div>
                <h2> Members </h2>
              <Layout2Col>
                <div> member 1 </div>
                <div> member 2 </div>
              </Layout2Col>
              </div>
            </div>
            <div>
             {clubAction}
             <ul>
               <li> <a href="#"> Club location </a> </li>
               <li> <a href="#"> <span>github.com/</span> </a></li>
               <li> <a href="#"> <span>http://</span> </a> </li>
               <li> <a href="#"> email@email.com </a> </li>
               <li> Meeting dates  </li>
             </ul>
          </div>
        </Layout2ColsUnequal>
      </div>
    )
  }
}
