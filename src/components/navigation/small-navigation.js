import React from 'react';
import {Link} from 'gatsby';

class Navigation extends React.Component {
  render() {
    return(
      <div>
        <Link to="/members"> Members </Link> |
        <Link to="/organizations"> Organizations </Link> |
        <Link to="/faq-page"> FAQ </Link> 
      </div>
    )
  }
}

export default Navigation;
