import React from 'react';
import {login} from './../../../actions/userActions';
import store from './../../../store';

class Login extends React.Component {
  constructor()  {
    super();
    this.state = {
      username: '',
      password: '',
      keepLogedIn: false
    }
  }

  handleUsername = (event) => {
    this.setState({username: event.target.value});
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value});
  }

  handleLogin = () => {
    store.dispatch(login(this.state.username, this.state.password));
  }

  handleToRegister = () => {
    if (this.props.changeOption) this.props.changeOption('register');
  }

  render() {
    return (
      <div>
        <label> username: </label>
        <input type="text" onChange={this.handleUsername} />
        <br /><br />
        <label> password: </label>
        <input type="password" onChange={this.handlePassword} />
        <br /><br />
        <label> Keep me logged in </label>
        <input type="checkbox" />
        <br /><br />
        <span> Not a member ? </span>
        <span onClick={this.handleToRegister}> Signup </span>
        <br/><br />
        <button onClick={this.handleLogin}> Login </button>
      </div>
    )
  }
}

export default Login;
