import "./header.scss";

import React from "react";
import { Link } from "gatsby";
import LayoutContained from "./../../layouts/layout-contained/layout-contained";
import HeaderNavigation from "./../header-navigation/header-navigation";

/**
 * Contains the header section.
 *
 * @param props
 */
const Header = props => {
  return (
    <header className="header">
      <LayoutContained className="header__logo-wrapper">
        <Link to="/" className="header__logo" activeClassName="is-active">
          <span className="header__ossn-logo">
            <span className="header__ossn-logo-word">
              O<span className="header__ossn-logo-letters">pen</span>
            </span>
            <span className="header__ossn-logo-word">
              S<span className="header__ossn-logo-letters">ource</span>
            </span>
            <span className="header__ossn-logo-word">
              S<span className="header__ossn-logo-letters">tudent</span>
            </span>
            <span className="header__ossn-logo-word">
              N<span className="header__ossn-logo-letters">etwork</span>
            </span>
          </span>
          <span className="header__mozilla-logo">mozilla</span>
        </Link>
      </LayoutContained>
      <HeaderNavigation />
    </header>
  );
};

export default Header;
