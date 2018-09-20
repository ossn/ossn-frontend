import React from 'react';
import { connect } from 'react-redux';

import LogedInMenu from './logged-in-user';
import NotLoggedInMenu from './not-logged-in-user';

function mapStateToProps(store) {
	return {
	      user: store.user
	 };
}

class UserMenu extends React.Component {
  constructor() {
    super();
    this.state = {
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
    let extraContent = '';

    if (this.props.user.loggedIn) {
      extraContent =  <span> logged in </span>;
    }
    if (this.props.user.loggedIn) {
      content = <LogedInMenu />;
    } else  {
      content = <NotLoggedInMenu />;
    }

    return(
      <div>
        <div onClick={this.handleOpen}>
          {snapshot.open ? 'close' : 'open'}
          {extraContent}
        </div>
        <div>
          { snapshot.open ?  content : <div></div>  }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserMenu);
