// external modules
import React from 'react';
import {Link} from 'gatsby';

import './small-navigation.scss';

class Navigation extends React.Component {
  render() {
    return(
      <nav aria-labelledby="secondary-navigation" className="small-navigation">
        <h2 className="visually-hidden" id="primary-navigation"> Secondary Navigation </h2>
        <ul className="small-navigation__list">
          <li className="small-navigation__item"> <Link to="/members"> Members </Link> </li>
          <li className="small-navigation__item"> <Link to="/leaders-corner"> Leader's Corder </Link> </li>
          <li className="small-navigation__item"> <Link to="/organizations"> Organizations </Link> </li>
          <li className="small-navigation__item"> <Link to="/faq-page"> FAQ </Link> </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
