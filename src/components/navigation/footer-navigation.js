// external modules
import React from 'react';

// internal modules
import {InternalLinkWithIcon} from './../components/text-with-icon/text-with-icon';


class Navigation extends React.Component {
  render() {
    return(
      <nav aria-labelledby="footer-navigation">
        <h2 className="visually-hidden" id="footer-navigation"> Footer Navigation </h2>
        <ul>
          <li> <InternalLinkWithIcon link="/find-club" label="Clubs" /> </li>
          <li> <InternalLinkWithIcon link="/contribute" label="Opportunities" /> </li>
          <li> <InternalLinkWithIcon link="/about-us" label="About us" /> </li>
          <li> <InternalLinkWithIcon link="/members" label="Members" /> </li>
          <li> <InternalLinkWithIcon link="/organizations" label="Organizations" /> </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
