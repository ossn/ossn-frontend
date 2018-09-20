import React from 'react';
import {Link} from 'gatsby';
import UserMenu from './../components/user-menu/user-menu';


class Navigation extends React.Component {
  render() {
    return(
      <div>
        <Link to="/"> img here </Link> |
        <Link to="/find-club"> Clubs </Link> |
        <Link to="/contribute"> Opportunities </Link> |
        <Link to="/about-us"> About us </Link>
        <UserMenu />
      </div>
    )
  }
}

export default Navigation;
