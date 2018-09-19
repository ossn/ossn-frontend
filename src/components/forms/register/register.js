import React from 'react';

class Register extends React.Component {
  constructor()  {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsername = (event) => {
    this.setState({username: event.target.value});
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value});
  }

  handleToLogin = () => {
    if (this.props.changeOption) this.props.changeOption('login');
  }

  render() {
    return (
      <div>
        <label> username: </label>
        <input type="text" onChange={this.handleUsername} />
        <br /><br />
        <label> email: </label>
        <input type="text" onChange={this.handleUsername} />
        <br /><br />
        <label> password: </label>
        <input type="password" onChange={this.handlePassword} />
        <br /><br />
        <label> I wish to receive monthly newsletter </label>
        <input type="checkbox" />
        <br /><br />
        <span> Already a member ? </span>
        <span onClick={this.handleToLogin}> Login </span>
        <br/><br />
        <button> Register </button>
      </div>
    )
  }
}

export default Register;
