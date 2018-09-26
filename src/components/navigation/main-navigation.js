import React from 'react';
import {Link} from 'gatsby';
import UserMenu from './../components/user-menu/user-menu';

import './main-navigation.scss';

class Navigation extends React.Component {
  render() {
    return(
      <nav aria-labelledby="primary-navigation" className="main-navigation">
        <h2 className="visually-hidden" id="primary-navigation"> Primary Navigation </h2>
        <ul className="main-navigation__tab-wrapper">
          <li className="main-navigation__tab">
            <Link to="/">
              <span>Open Source Student Network</span>
              <span> mozilla</span>
            </Link>
          </li>
          <li className="main-navigation__tab"> <Link to="/find-club"> Clubs </Link> </li>
          <li className="main-navigation__tab"> <Link to="/contribute"> Opportunities </Link> </li>
          <li className="main-navigation__tab"> <Link to="/about-us"> About us </Link> </li>
        </ul>
        <UserMenu />
      </nav>
    )
  }
}

export default Navigation;
