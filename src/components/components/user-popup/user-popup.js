import "./user-popup.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Link } from "gatsby";
import { LogoutLink } from "./../../layouts/auth-wrapper/auth-wrapper";

/**
 * The pop up window at the user menu.
 */
class Overlay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.container = document.querySelector("#content");
    this.el = document.createElement("div");
    this.el.className = "user-popup__overlay";
  }

  /**
   * Appends the element into the DOM on mount.
   */
  componentDidMount() {
    this.container = document.querySelector("js-content");
    this.container && this.container.appendChild(this.el);
  }

  /**
   * Remove the element from the DOM when when the component unmount.
   */
  componentWillUnmount() {
    this.container && this.container.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(<></>, this.el);
  }
}

/**
 * The logged in user menu.
 */
class LoggedInUserMenu extends React.Component {
  render() {
    const logout = (
      <LogoutLink className="user-popup__link user-popup__link--logout" />
    );

    return (
      <div className="user-popup__wrapper">
        <Overlay />
        <ul className="user-popup">
          <li className="user-popup__item">
            <Link
              to={`/members/${this.props.userId}`}
              className="user-popup__link"
              activeClassName="is-active"
            >
              My profile
            </Link>
          </li>
          <li className="user-popup__item user-popup__item--logout">
            {logout}
          </li>
        </ul>
      </div>
    );
  }
}

export default LoggedInUserMenu;
