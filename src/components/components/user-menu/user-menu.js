import React from 'react';
import Login from './../../forms/login/login';
import Register from './../../forms/register/register';

class UserMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      option: 'login',
      open: false
    }
  }

  handleOpen = () => {
    this.setState({open: !this.state.open});
  }

  handleOption = (newOption) => {
    this.setState({option: newOption});
  }

  render() {
    const snapshot = {...this.state};

    let content = <div> </div>;

    if (snapshot.loggedIn) {
      content =  <span> logged in </span>;
    } else if (snapshot.option === 'login') {
      content = (
        <Login changeOption={(option)=>{this.handleOption(option)}} />
      );
    } else {
      content = (
        <Register changeOption={(option)=>{this.handleOption(option)}} />
      );
    }

    // console.log(content);
    return(
      <div>
        <div onClick={this.handleOpen}>
          {snapshot.open ? 'close' : 'open'}
        </div>
        <div>
          { snapshot.open ?  content : <div></div>  }
        </div>
      </div>
    );
  }
}

export default UserMenu;
