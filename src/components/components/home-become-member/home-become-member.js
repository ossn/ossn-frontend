/*
  Contains a become a member CTA.
  Appears at /  (home page)
*/

// external modules
import React from 'react';
import { connect } from 'react-redux';

// local  modules
import { mapUserToProps } from './../../../utils/redux-utils';

// styles
import './home-become-member.scss';

class BecomeMember extends React.Component {
  render() {
    if (this.props.user.loggedIn) return <div />;
    return (
      <div className="home-become-member__wrapper">
        <div className="home-become-member">
          <div className="home-become-member__text">
            <h2 className="title title--m-small">
              {' '}
              Why join the Open Source Student Network?{' '}
            </h2>
            <p className="text text--small">
              By joining, you get access to our chat channel, ongoing support
              and mentorship, as well as leadership training. Moreover, you will
              regularly get our latest opportunities in your mailbox.
            </p>
          </div>
          <div className="home-become-member__cta">
            <button className="button button--cta home-become-member__button">
              {' '}
              Become a member{' '}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapUserToProps)(BecomeMember);
