import React from 'react';
import { logout } from './../../../actions/userActions';
import store from './../../../store';

class LoggedInUserMenu extends React.Component {
  // publish a logout event
  logout = () => {
    store.dispatch(logout());
  };

  render() {
    return (
      <div className="user-popup__wrapper">
        <ul className="user-popup">
          <li className="user-popup__item"> My profile </li>
          <li className="user-popup__item user-popup__item--logout">
            <button className="user-popup__logout-button" onClick={this.logout}>
              {' '}
              LOGOUT{' '}
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default LoggedInUserMenu;
