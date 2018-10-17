// External modules.
import React from 'react';
import {Link} from 'gatsby';

// Local modules.
import PreNavigation from './../../navigation/secondary-navigation/secondary-navigation';
import Navigation from './../../navigation/main-navigation/main-navigation';

// Styles.
import './header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top-inner">
          <PreNavigation />
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom-inner">
          <Link to="/" className="header__logo" activeClassName="is-active">
            <span className="header__ossn-logo">Open Source Student Network</span>
            <span className="header__mozilla-logo">mozilla</span>
          </Link>

          <Navigation />
        </div>
      </div>
    </header>
  )
};

export default Header;
