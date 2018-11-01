import './secondary-navigation.scss';

import { Link } from 'gatsby';
import React from 'react';

const Navigation = () => (
  <nav aria-labelledby="secondary-navigation" className="secondary-navigation">
    <h2 className="visually-hidden" id="secondary-navigation">
      Secondary Navigation
    </h2>
    <ul className="secondary-navigation__list">
      <li className="secondary-navigation__item">
        <Link
          to="/leaders-corner"
          className="secondary-navigation__link"
          activeClassName="is-active"
        >
          Leader&apos;s Corner
        </Link>
      </li>
      <li className="secondary-navigation__item">
        <Link
          to="/about-us"
          className="secondary-navigation__link"
          activeClassName="is-active"
        >
          About us
        </Link>
      </li>
      <li className="secondary-navigation__item">
        <Link
          to="/organizations"
          className="secondary-navigation__link"
          activeClassName="is-active"
        >
          Organizations
        </Link>
      </li>
      <li className="secondary-navigation__item">
        <Link
          to="/faq-page"
          className="secondary-navigation__link"
          activeClassName="is-active"
        >
          FAQ
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
