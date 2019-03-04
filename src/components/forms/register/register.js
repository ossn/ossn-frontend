import React from "react";

import { register } from "./../../../actions/userActions";
import store from "./../../../store";

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      receiveNewsletter: false
    };
  }

  handleUsername = event => {
    this.setState({ username: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleNewsletter = event => {
    this.setState({ receiveNewsletter: event.target.checked });
  };

  handleToLogin = () => {
    if (this.props.changeOption) this.props.changeOption("login");
  };

  // publishes a register event
  register = () => {
    const snapshot = { ...this.state };
    store.dispatch(
      register(
        snapshot.username,
        snapshot.password,
        snapshot.email,
        snapshot.newsletter
      )
    );
  };

  render() {
    const snapshot = { ...this.state };

    return (
      <div>
        <label htmlFor="register-username">
          username:
          <input
            type="text"
            onChange={this.handleUsername}
            value={snapshot.username}
            id="register-username"
          />
        </label>
        <label htmlFor="register-email">
          email:
          <input
            type="text"
            onChange={this.handleEmail}
            value={snapshot.email}
            id="register-email"
          />
        </label>

        <label htmlFor="register-password">
          password:
          <input
            type="password"
            onChange={this.handlePassword}
            value={snapshot.password}
          />
        </label>
        <label htmlFor="register-receive-emails">
          I wish to receive monthly newsletter
          <input
            type="checkbox"
            onChange={this.handleNewsletter}
            checked={snapshot.receiveNewsletter}
            id="register-receive-emails"
          />
        </label>
        <span> Already a member ? </span>
        <button onClick={this.handleToLogin}> Login </button>
        <button onClick={this.register}> Register </button>
      </div>
    );
  }
}

export default Register;
