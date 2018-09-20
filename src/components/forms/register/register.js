import React from 'react';
import {register} from './../../../actions/userActions';
import store from './../../../store';

class Register extends React.Component {

  constructor()  {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      receiveNewsletter: false
    }
  }

  handleUsername = (event) => {
    this.setState({username: event.target.value});
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value});
  }

  handleEmail = (event) => {
    this.setState({email: event.target.value});
  }

  handleNewsletter = (event) => {
    this.setState({receiveNewsletter: event.target.checked});
  }

  handleToLogin = () => {
    if (this.props.changeOption) this.props.changeOption('login');
  }

  // publishes a register event
  register = () => {
    const snapshot = {...this.state};
    store.dispatch(register(snapshot.username, snapshot.password,
                                          snapshot.email, snapshot.newsletter));
  }

  render() {
    const snapshot = {...this.state};

    return (
      <div>
        <label> username: </label>
        <input type="text" onChange={this.handleUsername} value={snapshot.username}/>
        <br /><br />
        <label> email: </label>
        <input type="text" onChange={this.handleEmail} value={snapshot.email}/>
        <br /><br />
        <label> password: </label>
        <input type="password" onChange={this.handlePassword} value={snapshot.password} />
        <br /><br />
        <label> I wish to receive monthly newsletter </label>
        <input type="checkbox" onChange={this.handleNewsletter} checked={snapshot.receiveNewsletter}/>
        <br /><br />
        <span> Already a member ? </span>
        <span onClick={this.handleToLogin}> Login </span>
        <br/><br />
        <button onClick={this.register}> Register </button>
      </div>
    )
  }
}

export default Register;
