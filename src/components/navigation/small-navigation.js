// external modules
import React from 'react';
import {Link} from 'gatsby';

// internal modules
import {InternalLinkWithIcon} from './../components/text-with-icon/text-with-icon';


class Navigation extends React.Component {
  render() {
    return(
      <div>
        <ul>
        <li> <Link to="/members"> Members </Link> </li>
        <li> <Link to="/organizations"> Organizations </Link> </li>
        <li> <Link to="/faq-page"> FAQ </Link> </li>
        </ul>
      </div>
    )
  }
}

export default Navigation;
