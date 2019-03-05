import "./user-menu.scss";

import React from "react";
import { connect } from "react-redux";

import { mapUserToProps } from "./../../../utils/redux-utils";
import LoggedInMenu from "./../user-popup/user-popup";
import { LoginLink } from "./../../layouts/auth-wrapper/auth-wrapper";
import memberImage from "../../../images/member-60x60.png";

/**
 * Creates the user menu depending on the user logged in state.
 */
class UserMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.popup = React.createRef();
    this.menuButton = React.createRef();
    this.hideMenu = this.handleOutsideClick.bind(this);
    this.state = {
      option: "login",
      open: false,
      user: this.props.user
    };
  }

  /**
   * Adds event listener for the UI handling.
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
      this.popup.current &&
      this.menuButton.current &&
      !this.popup.current.contains(event.target) &&
      !this.menuButton.current.contains(event.target)
    ) {
      this.setState({ open: false });
    }
  };

  /**
   * Maps the enter key press event to handleOpen.
   *
   * @param event
   */
  handleKeyPress = event => {
    if (event.key === "Enter") return this.handleOpen;
  };

  /**
   * Checks if the user is logged in.
   * @returns {boolean}
   */
  isUserLoggedIn = () => {
    return !!this.props.user.user;
  };

  render() {
    const snapshot = this.state;
    const isExpanded = snapshot.open;
    const isHidden = !snapshot.open;
    let userImageUrl =
      this.props.user.user && this.props.user.user.imageUrl
        ? this.props.user.user.imageUrl
        : memberImage;
    let userLabel =
      this.props.user.user && this.props.user.user.userName
        ? this.props.user.user.userName
        : "";
    let userAlt = userLabel;
    let userId =
      this.props.user.user && this.props.user.user.id
        ? this.props.user.user.id
        : "";

    let user = (
      <div
        className="main-navigation__user-wrapper"
        onClick={this.handleOpen}
        onKeyPress={this.handleKeyPress}
        role="button"
        tabIndex={0}
        aria-controls="user-menu-wrapper"
        aria-expanded={isExpanded}
        ref={this.menuButton}
      >
        <div className="main-navigation__user-image-wrapper">
          <div className="user-menu__user-image-wrapper">
            <img
              src={userImageUrl}
              alt={userAlt}
              className="user-menu__user-image"
            />
          </div>
        </div>
        <div className="main-navigation__user-name-wrapper">{userLabel}</div>
      </div>
    );

    const loggedInHeaderItem = (
      <ul className="main-navigation__item-wrapper main-navigation__item-wrapper--user main-navigation__item-wrapper--logged-in">
        <li className="">
          {user}
          <div
            ref={this.popup}
            className={`user-menu ${
              snapshot.open ? "is-expanded" : "is-collapsed"
            }`}
          >
            <div
              id="user-menu-wrapper"
              className="user-menu__popup"
              hidden={isHidden}
            >
              {snapshot.open && <LoggedInMenu userId={userId} />}
            </div>
          </div>
        </li>
      </ul>
    );

    const loginButton = (
      <LoginLink label="Login/Signup" className="button button--header" />
    );

    return (
      <div>{this.isUserLoggedIn() ? loggedInHeaderItem : loginButton}</div>
    );
  }
}
export default connect(mapUserToProps)(UserMenu);
