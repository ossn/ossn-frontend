import './user-menu.scss';

import React from 'react';
import { connect } from 'react-redux';

import { mapUserToProps } from './../../../utils/redux-utils';
import LoggedInMenu from './logged-in-user';
import NotLoggedInMenu from './not-logged-in-user';

class UserMenu extends React.PureComponent {
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

  handleKeyPress = e => {
    if (e.key === 'Enter') return this.handleOpen;
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

    // menu place holder
    let content = <div> </div>;

    // decide which menu to show
    if (this.props.user.loggedIn) {
      content = <LoggedInMenu />;
    } else {
      content = <NotLoggedInMenu />;
    }

    return (
      <div ref={this.popup} className={classString}>
        <button
          onClick={this.handleOpen}
          onKeyPress={this.handleKeyPress}
          className="button button--header"
          aria-controls={'user-menu-wrapper'}
          aria-expanded={isExpanded}
        >
          {this.props.user.loggedIn ? 'Logged In' : 'Log In/Sign Up'}
        </button>
        <div
          id="user-menu-wrapper"
          className="user-menu__popup"
          hidden={isHidden}
        >
          {content}
        </div>
      </div>
    );
  }
}

export default connect(mapUserToProps)(UserMenu);
