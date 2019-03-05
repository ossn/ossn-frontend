import React from "react";
import { Menu, X } from "react-feather";
import MediaQuery from "react-responsive";

import LayoutContained from "./../../layouts/layout-contained/layout-contained";
import Navigation from "./../../navigation/main-navigation/main-navigation";
import PreNavigation from "./../../navigation/secondary-navigation/secondary-navigation";
import ShadowBox from "./../shadow-box/shadow-box";

/**
 * Header navigation both for desktop and mobile.
 */

/**
 * Header navigation inner.
 *
 * @param props
 */
const HeaderNavigationInner = props => {
  return (
    <div className={props.className} id={props.id} hidden={props.hiddenState}>
      <div className="header__bottom">
        <LayoutContained className="header__bottom-inner">
          <Navigation />
        </LayoutContained>
      </div>
      <div className="header__top">
        <LayoutContained>
          <PreNavigation />
        </LayoutContained>
      </div>
    </div>
  );
};

/**
 * Header navigation.
 *
 * @param props
 */
class HeaderNavigation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.expandable = React.createRef();
    this.state = {
      open: false
    };
  }

  /**
   * Updates the open / close state on the header navigation object.
   */
  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  /**
   * Updates the open  / close state on the header navigation object.
   * Closes the menu if it is expanded on outside click.
   *
   * @param event
   */
  handleOutsideClick = event => {
    if (
      this.state.open &&
      this.expandable.current &&
      !this.expandable.current.contains(event.target)
    ) {
      this.setState({ open: false });
    }
  };

  /**
   * Adds an event listener for the UI handling.
   */
  componentDidMount() {
    if (typeof document !== "undefined")
      document.addEventListener("mousedown", this.handleOutsideClick, false);
  }

  /**
   * Removes the listener in absence of the component.
   */
  ComponentWillUnmount() {
    if (typeof document !== "undefined")
      document.removeEventListener("mousedown", this.handleOutsideClick, false);
  }

  /**
   * Maps the enter key press event to handleOpen.
   *
   * @param event
   */
  handleKeyPress = event => {
    if (event.key === "Enter") return this.handleOpen;
  };

  render() {
    const snapshot = this.state;
    const isExpanded = snapshot.open;
    const isHidden = !snapshot.open;
    const classString = `header__navigation-container ${
      isExpanded ? "is-expanded" : "is-collapsed"
    }`;

    /**
     * Handles the menu toggle appearence according to open / closed menu state.
     *
     * @param expandedState
     */
    const menuToggle = expandedState => {
      if (expandedState) {
        return <X className="header__menu-icon" size={20} />;
      } else {
        return <Menu className="header__menu-icon" size={20} />;
      }
    };
    return (
      <ShadowBox className="header__inner">
        <div ref={this.expandable}>
          <MediaQuery maxWidth={767}>
            <button
              onClick={this.handleOpen}
              onKeyPress={this.handleKeyPress}
              className="button button--header header__button"
              aria-controls="header-navigation-container"
              aria-expanded={isExpanded}
              aria-label="Toggle menu visibility"
            >
              {menuToggle(isExpanded)}
            </button>
            <HeaderNavigationInner
              className={classString}
              id="header-navigation-container"
              hiddenState={isHidden}
            />
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <HeaderNavigationInner
              className={classString}
              id="header-navigation-container"
              hiddenState={false}
            />
          </MediaQuery>
        </div>
      </ShadowBox>
    );
  }
}

export default HeaderNavigation;
