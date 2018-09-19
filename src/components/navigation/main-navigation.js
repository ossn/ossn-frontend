import React from 'react';
import {Link} from 'gatsby';
import UserMenu from './../components/user-menu/user-menu';


class Navigation extends React.Component {
  render() {
    return(
      <div>
        <Link to="/"> img here </Link> |
        <Link to="/clubs"> Clubs </Link> |
        <Link to="/opportunities"> Opportunities </Link> |
        <Link to="/about"> About us </Link>
        <UserMenu />
      </div>
    )
  }
}

export default Navigation;
