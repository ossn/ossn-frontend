import './user-menu.scss';

import React from 'react';
import { connect } from 'react-redux';

import { mapUserToProps } from './../../../utils/redux-utils';
import LoggedInMenu from './../user-popup/user-popup';

class UserMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.popup = React.createRef();
    this.menuButton = React.createRef();
    this.hideMenu = this.handleOutsideClick.bind(this);
    this.state = {
      option: 'login',
      open: false
    };
  }

  // puts an event listener for the UI handling (not that unsafe)
  componentDidMount() {
    if (typeof document !== 'undefined')
      document.addEventListener('mousedown', this.handleOutsideClick, false);
  }

  // remove the listener in absence of the component
  ComponentWillUnmount() {
    if (typeof document !== 'undefined')
      document.removeEventListener('mousedown', this.handleOutsideClick, false);
  }

  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleOption = newOption => {
    this.setState({ option: newOption });
  };

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

  handleKeyPress = e => {
    if (e.key === 'Enter') return this.handleOpen;
  };

  isUserLoggedIn = () => {
    // TODO: add implementation.
    return true;
  };

  render() {
    // copy of the state
    const snapshot = { ...this.state };
    const isExpanded = snapshot.open;
    const stateClass = snapshot.open ? 'is-expanded' : 'is-collapsed';
    const isHidden = !snapshot.open;

    let classes = ['user-menu'];
    if (stateClass) classes.push(stateClass);
    let classString = classes.join(' ');

    // TODO: add data dynamically
    // this.props.user.user...
    const userImageUrl =
      'http://loudwire.com/files/2015/04/Lemmy-Kilmister-630x420.jpg';
    const userLabel = 'Lemmy';
    const userAlt = userLabel;
    const userId = 16;

    // TODO: replace it with the logout link from #162
    // eslint-disable-next-line
    // https://github.com/ossn/ossn-frontend/pull/163/files#diff-fe6e501a6227203cc0a76ff32e010400R22
    const loginButton = (
      <a className="button button--header" href="/login" target="_blank">
        Log In/Sign Up
      </a>
    );

    let userImage = (
      <div
        className="user-menu__user-image-wrapper"
        onClick={this.handleOpen}
        onKeyPress={this.handleKeyPress}
        role="button"
        tabIndex={0}
        aria-controls={'user-menu-wrapper'}
        aria-expanded={isExpanded}
        ref={this.menuButton}
      >
        <img
          src={userImageUrl}
          alt={userAlt}
          className="user-menu__user-image"
        />
      </div>
    );

    return (
      <ul
        className={`main-navigation__item-wrapper main-navigation__item-wrapper--user ${
          this.isUserLoggedIn()
            ? 'main-navigation__item-wrapper--logged-in'
            : ''
        }`}
      >
        <li className="main-navigation__item">
          <span className="main-navigation__link">
            {this.isUserLoggedIn() ? userLabel : ''}
          </span>
        </li>
        <li className="main-navigation__item">
          {this.isUserLoggedIn() ? userImage : loginButton}
          <div ref={this.popup} className={classString}>
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
  }
}

export default connect(mapUserToProps)(UserMenu);
