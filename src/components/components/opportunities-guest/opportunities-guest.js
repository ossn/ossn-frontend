/* eslint-disable */
import React from 'react';

import MemberUpdates from './../member-updates/member-updates';

// style
import './opportunities-guest.scss'

export default (props) => {
  return (
    <div className="opportunities-guest">

      <h1 className="title title--x-large opportunities-guest__title">
        Why join the Open Source Student Network?
      </h1>

      <p  className="opportunities-guest__text highlighted-text highlighted-text--small">
        By joining, you get access to our chat channel, ongoing support and mentorship, as well as leadership training. Moreover, you will regularly get our latest opportunities in your mailbox.
      </p>

      <div className="opportunities-guest__announcements">
        <MemberUpdates dummyData />
        <a href="#" className="">
          <div className="button opportunities-guest__link">
            <span className="title title--small"> Become a member first </span>
          </div>
        </a>
      </div>


    </div>
  );
}
