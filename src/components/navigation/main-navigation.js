import React from 'react';
import {Link} from 'gatsby';
import UserMenu from './../components/user-menu/user-menu';


class Navigation extends React.Component {
  render() {
    return(
      <div>
        <div> <Link to="/"> img here </Link>  </div>
        <ul>
          <li> <Link to="/find-club"> Clubs </Link> </li>
          <li> <Link to="/contribute"> Opportunities </Link> </li>
          <li> <Link to="/about-us"> About us </Link> </li>
        </ul>
        <UserMenu />
      </div>
    )
  }
}

export default Navigation;
