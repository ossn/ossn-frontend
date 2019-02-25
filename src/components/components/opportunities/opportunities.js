/*
  This compoenent is a placeholder for the the contribute page
  as is shown to members and non members.

  Subscribed to User redux reducer.
*/
// external modules
import React from "react";
import { connect } from "react-redux";

// local modules
import OpportunitiesMember from "./../opportunities-member/opportunities-member";

// utils
import { mapUserToProps } from "./../../../utils/redux-utils";

class Opportunities extends React.Component {
  render() {
    const jobs = this.props.jobs;
    const announcements = this.props.announcements;
    const channels = this.props.channels;
    const tools = this.props.tools;
    const resources = this.props.resources;

    // view is the placeholder variabe.
    // the redux store holds the information for a logged in user.
    // The value of the view variabe is loaded acording to that information.
    // const loggedIn = this.props.user.loggedIn;// || true;
    const view = (
      <OpportunitiesMember
        jobs={jobs}
        announcements={announcements}
        channels={channels}
        tools={tools}
        resources={resources}
      />
    );

    return <div>{view}</div>;
  }
}

export default connect(mapUserToProps)(Opportunities);
