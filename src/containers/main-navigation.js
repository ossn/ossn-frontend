import React from 'react';
import {Link} from 'gatsby';

class Navigation extends React.Component {
  render() {
    return(
      <div>
        <Link to="/"> img here </Link> |
        <Link to="/clubs"> Clubs </Link> |
        <Link to="/opportunities"> Opportunities </Link> |
        <Link to="/about"> About us </Link> 
      </div>
    )
  }
}

export default Navigation;
