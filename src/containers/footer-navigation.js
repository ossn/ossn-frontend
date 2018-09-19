import React from 'react';
import {Link} from 'gatsby';

class Navigation extends React.Component {
  render() {
    return(
      <div>
        <Link to="/clubs"> Clubs </Link> <br/>
        <Link to="/opportunities"> Opportunities </Link> <br/>
        <Link to="/about"> About us </Link> <br/>
        <Link to="/members"> Members </Link> <br/>
        <Link to="/organizations"> Organizations </Link>
      </div>
    )
  }
}

export default Navigation;
