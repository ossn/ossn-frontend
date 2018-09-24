import React from 'react';
import {Link} from 'gatsby';
import UserMenu from './../components/user-menu/user-menu';


class Navigation extends React.Component {
  render() {
    return(
      <nav aria-labelledby="primary-navigation">
        <h2 className="visually-hidden" itemID="primary-navigation"> Primary Navigation </h2>
        <ul>
          <li> <Link to="/"> Logo </Link> </li>
          <li> <Link to="/find-club"> Clubs </Link> </li>
          <li> <Link to="/contribute"> Opportunities </Link> </li>
          <li> <Link to="/about-us"> About us </Link> </li>
        </ul>
        <UserMenu />
      </nav>
    )
  }
}

export default Navigation;
