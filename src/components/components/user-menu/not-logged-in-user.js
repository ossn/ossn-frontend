import React from 'react';

import Login from './../../forms/login/login';
import Register from './../../forms/register/register';

class NotLoggedInUserMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      option: 'login',
    }
  }

  handleOption = (option) =>{
    this.setState({option: option});
  }

  render() {
    const snapshot = {...this.state};

    // decide which form to show
    const content = snapshot.option === 'login'
      ? <Login changeOption={(option)=>{this.handleOption(option)}} />
      : <Register changeOption={(option)=>{this.handleOption(option)}} /> ;

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default NotLoggedInUserMenu;
