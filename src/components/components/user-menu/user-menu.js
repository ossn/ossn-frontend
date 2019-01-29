import './user-menu.scss';

import React from 'react';
import { connect } from 'react-redux';

import { mapUserToProps } from './../../../utils/redux-utils';
import LoggedInMenu from './../user-popup/user-popup';
import { LoginLink } from './../../layouts/auth-wrapper/auth-wrapper';

class UserMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.popup = React.createRef();
    this.menuButton = React.createRef();
    this.hideMenu = this.handleOutsideClick.bind(this);
    this.state = {
      option: 'login',
      open: false,
      user: this.props.user
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
    return !!this.props.user.user;
  };

  render() {
    // copy of the state
    const snapshot = { ...this.state };
    const isExpanded = snapshot.open;
    const stateClass = snapshot.open ? 'is-expanded' : 'is-collapsed';
    const isHidden = !snapshot.open;
    let userImageUrl =
      this.props.user.user && this.props.user.user.imageUrl
        ? this.props.user.user.imageUrl
        : '';
    let userLabel =
      this.props.user.user && this.props.user.user.userName
        ? this.props.user.user.userName
        : '';
    let userAlt = userLabel;
    let userId =
      this.props.user.user && this.props.user.user.id
        ? this.props.user.user.id
        : '';
    let classes = ['user-menu'];
    if (stateClass) classes.push(stateClass);
    let classString = classes.join(' ');

    let user = (
      <div
        className="main-navigation__user-wrapper"
        onClick={this.handleOpen}
        onKeyPress={this.handleKeyPress}
        role="button"
        tabIndex={0}
        aria-controls={'user-menu-wrapper'}
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

    const loginButton = (
      <LoginLink label="Login/Signup" className="button button--header" />
    );

    return (
      <div>{this.isUserLoggedIn() ? loggedInHeaderItem : loginButton}</div>
    );
  }
}
export default connect(mapUserToProps)(UserMenu);
