// external modules
import React from 'react';
import {Link} from 'gatsby';

class Navigation extends React.Component {
  render() {
    return(
      <nav aria-labelledby="secondary-navigation">
        <h2 className="visually-hidden" id="primary-navigation"> Secondary Navigation </h2>
        <ul>
        <li> <Link to="/members"> Members </Link> </li>
        <li> <Link to="/organizations"> Organizations </Link> </li>
        <li> <Link to="/faq-page"> FAQ </Link> </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
