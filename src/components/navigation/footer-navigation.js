import React from 'react';
import {Link} from 'gatsby';

class Navigation extends React.Component {
  render() {
    return(
      <div>
        <Link to="/find-club"> Clubs </Link> <br/>
        <Link to="/contribute"> Opportunities </Link> <br/>
        <Link to="/about-us"> About us </Link> <br/>
        <Link to="/members"> Members </Link> <br/>
        <Link to="/organizations"> Organizations </Link>
      </div>
    )
  }
}

export default Navigation;
