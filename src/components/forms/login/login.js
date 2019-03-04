import React from "react";

import { login } from "./../../../actions/userActions";
import store from "./../../../store";

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      keepLoggedIn: false
    };
  }

  handleUsername = event => {
    this.setState({ username: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleKeepLoggedIn = event => {
    this.setState({ keepLoggedIn: event.target.checked });
  };

  handleToRegister = () => {
    if (this.props.changeOption) this.props.changeOption("register");
  };

  // publishes a login event
  login = () => {
    const snapshot = { ...this.state };
    store.dispatch(login(snapshot.username, snapshot.password));
  };

  render() {
    const snapshot = { ...this.state };

    return (
      <div>
        <label htmlFor="login-username">
          username:
          <input
            type="text"
            onChange={this.handleUsername}
            value={snapshot.username}
            id="login-username"
          />
        </label>
        <label htmlFor="login-password">
          password:
          <input
            type="password"
            onChange={this.handlePassword}
            value={snapshot.password}
            id="login-password"
          />
        </label>
        <label htmlFor="login-keep-logged-in">
          Keep me logged in
          <input
            type="checkbox"
            onChange={this.handleKeepLoggedIn}
            checked={snapshot.keepLoggedIn}
            id="login-keep-logged-in"
          />
        </label>
        <span> Not a member ? </span>
        <button onClick={this.handleToRegister}> Signup </button>
        <button onClick={this.login}> Login </button>
      </div>
    );
  }
}

export default Login;
