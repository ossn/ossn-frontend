/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import { User } from 'react-feather';

import LoggedInMenu from './logged-in-user';
import NotLoggedInMenu from './not-logged-in-user';

import { mapUserToProps } from './../../../utils/redux-utils';

import './user-menu.scss';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.popup = React.createRef();
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
    if (this.state.open && !this.popup.current.contains(event.target)) {
      this.setState({ open: false });
    }
  };

  render() {
    // copy of the state
    const snapshot = { ...this.state };

    // menu place holder
    let content = <div> </div>;

    // not actually needed
    let extraContent = '';

    if (this.props.user.loggedIn) {
      extraContent = <span> logged in </span>;
    }

    // decide which menu to show
    if (this.props.user.loggedIn) {
      content = <LoggedInMenu />;
    } else {
      content = <NotLoggedInMenu />;
    }

    return (
      <div className="user-menu">
        <button onClick={this.handleOpen} onKeyPress={this.handleOpen} className="button button--header">
          <User className="user-menu__icon" />
          {snapshot.open ? 'close' : 'Login/Signup'}
          {extraContent}
        </button>
        <div className="user-menu__popup">{snapshot.open ? content : ''}</div>
      </div>
    );
  }
}

export default connect(mapUserToProps)(UserMenu);
