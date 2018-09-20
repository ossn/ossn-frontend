import React from 'react';
import {logout} from './../../../actions/userActions';
import store from './../../../store';

class LoggedInUserMenu extends React.Component {

  // publish a logout event
  logout = () => {
    store.dispatch(logout());
  }

  render() {
    return (
      <div>
        <ul>
          <li> Create club </li>
          <li> My profile </li>
          <li> Settings </li>
          <li onClick={this.logout} > LOGOUT </li>
        </ul>
      </div>
    );
  }
}

export default LoggedInUserMenu;
