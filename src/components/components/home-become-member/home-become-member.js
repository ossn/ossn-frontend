// external modules
import React from 'react';
import { connect } from 'react-redux';

// local  modules
import {mapUserToProps} from './../../../utils/redux-utils';

class BecomeMember extends React.Component {

  render() {
    if (this.props.user.loggedIn) return <div></div>;
    return (
      <div>
        <div>
            <h2> Why join the Open Source Student Network? </h2>
            <p>
              By joining, you get access to our chat channel, ongoing support and mentorship, as well as leadership training. Moreover, you will regularly get our latest opportunities in your mailbox.
            </p>
        </div>
        <div>
          <button className="button"> Become a member </button>
        </div>
      </div>
    )
  }
}

export default connect(mapUserToProps)(BecomeMember);
