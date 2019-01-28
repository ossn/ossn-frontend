/*
The pop uo window at the user menu.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'gatsby';

import './user-popup.scss';

class Overlay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.container = document.querySelector('#content');
    this.el = document.createElement('div');
    this.el.className = 'user-popup__overlay';
  }

  componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    this.container = document.querySelector('#content');
    this.container && this.container.appendChild(this.el);
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    this.container && this.container.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(<></>, this.el);
  }
}

class LoggedInUserMenu extends React.Component {
  render() {
    // TODO: replace with the logout link.
    const logout = (
      <button className="user-popup__logout-button">LOGOUT</button>
    );

    return (
      <div className="user-popup__wrapper">
        <Overlay />
        <ul className="user-popup">
          <li className="user-popup__item">
            <Link
              to={`/members/${this.props.userId}`}
              className="main-navigation__link"
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
