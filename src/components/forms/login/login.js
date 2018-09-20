import React from 'react';
import {login} from './../../../actions/userActions';
import store from './../../../store';

class Login extends React.Component {

  constructor()  {
    super();
    this.state = {
      username: '',
      password: '',
      keepLoggedIn: false
    }
  }

  handleUsername = (event) => {
    this.setState({username: event.target.value});
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value});
  }

  handleKeepLoggedIn = (event) => {
    this.setState({keepLoggedIn: event.target.checked});
  }

  login = () => {
    store.dispatch(login(this.state.username, this.state.password));
  }

  handleToRegister = () => {
    if (this.props.changeOption) this.props.changeOption('register');
  }

  render() {
    const snapshot = {...this.state};

    return (
      <div>
        <label> username: </label>
        <input type="text" onChange={this.handleUsername} value={snapshot.username} />
        <br /><br />
        <label> password: </label>
        <input type="password" onChange={this.handlePassword} value={snapshot.password}/>
        <br /><br />
        <label> Keep me logged in </label>
        <input type="checkbox" onChange={this.handleKeepLoggedIn} checked={snapshot.keepLoggedIn}/>
        <br /><br />
        <span> Not a member ? </span>
        <span onClick={this.handleToRegister}> Signup </span>
        <br/><br />
        <button onClick={this.login}> Login </button>
      </div>
    )
  }
}

export default Login;
