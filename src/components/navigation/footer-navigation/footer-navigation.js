// external modules
import React from 'react';
import {Link} from 'gatsby';

class Navigation extends React.Component {
  render() {
    return(
      <section className="footer__section footer__section--navigation">
        <h5 className="footer__heading"> Navigate </h5>
        <ul className="footer__list">
          <li>
            <Link className="footer__link" link="/find-club">Clubs</Link>
          </li>
          <li>
            <Link className="footer__link" link="/members">Members</Link>
          </li>
          <li>
            <Link className="footer__link" link="/contribute">Opportunities</Link>
          </li>
          {/*TODO Add correct link*/}
          <li>
            <Link className="footer__link" link="/member">Login/Signup</Link>
          </li>
          <li>
            <Link className="footer__link" link="/organizations">Affiliations</Link>
          </li>
          <li>
            <Link className="footer__link" link="/about-us">About us</Link>
          </li>
        </ul>
      </section>
    )
  }
}

export default Navigation;
