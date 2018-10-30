// external modules
import { Link } from 'gatsby';
import React from 'react';

const Navigation = () => (
  <section className="footer__section footer__section--navigation">
    <h5 className="footer__heading"> Navigate </h5>
    <ul className="footer__list">
      <li>
        <Link className="footer__link" to="/find-club">
          Clubs
        </Link>
      </li>
      <li>
        <Link className="footer__link" to="/members">
          Members
        </Link>
      </li>
      <li>
        <Link className="footer__link" to="/contribute">
          Opportunities
        </Link>
      </li>
      {/*TODO Add correct link*/}
      <li>
        <Link className="footer__link" to="/member">
          Login/Signup
        </Link>
      </li>
      <li>
        <Link className="footer__link" to="/organizations">
          Affiliations
        </Link>
      </li>
      <li>
        <Link className="footer__link" to="/about-us">
          About us
        </Link>
      </li>
    </ul>
  </section>
)

export default Navigation
