/*
  Shows the become a member CTA.
*/
import React from "react";

import MemberUpdates from "./../member-updates/member-updates";
import LayoutContained from "./../../layouts/layout-contained/layout-contained";
import { LoginLink } from "./../../layouts/auth-wrapper/auth-wrapper";

// style
import "./opportunities-guest.scss";

export default props => {
  return (
    <LayoutContained>
      <div className="opportunities-guest">
        <div className="opportunities-guest__header-section">
          <h1 className="title title--x-large opportunities-guest__title">
            Why join the Open Source Student Network?
          </h1>

          <p className="opportunities-guest__text highlighted-text highlighted-text--small">
            By joining, you get access to our chat channel, ongoing support and
            mentorship, as well as leadership training. Moreover, you will
            regularly get our latest opportunities in your mailbox.
          </p>
        </div>
        <div className="opportunities-guest__announcements-section">
          <MemberUpdates dummyData />
          <div className="opportunities-guest__overlay">
            <LoginLink
              label="Become a member to get access!"
              className="button button--cta opportunities-guest__link"
            />
          </div>
        </div>
      </div>
    </LayoutContained>
  );
};
