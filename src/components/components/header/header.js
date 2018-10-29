/*
  Cotains the header section.
*/
// External modules.
import React from 'react';
import {Link} from 'gatsby';

// Local modules.
import LayoutContained from './../../layouts/layout-contained/layout-contained';
import PreNavigation from './../../navigation/secondary-navigation/secondary-navigation';
import Navigation from './../../navigation/main-navigation/main-navigation';
import UserMenu from './../../components/user-menu/user-menu';

// Styles.
import './header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__top">
        <LayoutContained>
          <PreNavigation />
        </LayoutContained>
      </div>
      <div className="header__bottom">
        <LayoutContained className="header__bottom-inner">
          <Link to="/" className="header__logo" activeClassName="is-active">
            <span className="header__ossn-logo">Open Source Student Network</span>
            <span className="header__mozilla-logo">mozilla</span>
          </Link>
          <Navigation />
          <UserMenu />
        </LayoutContained>
      </div>
    </header>
  )
};

export default Header;
