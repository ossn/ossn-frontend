// external modules
import React from 'react';
import { connect } from 'react-redux';

// local modules
import OpportunitiesMemeber from './../opportunities-member/opportunities-member';
import OpportunitiesGuest  from './../opportunities-guest/opportunities-guest';

// utils
import {mapUserToProps} from './../../../utils/redux-utils';


class Opportunities  extends React.Component {
  render() {
    const jobs = this.props.jobs;
    const announcements = this.props.announcements;
    const channels = this.props.channels;
    const tools = this.props.tools;
    const resources = this.props.resources;

    const loggedIn = this.props.user.loggedIn;// || true;

    const view = loggedIn
      ? <OpportunitiesMemeber jobs={jobs} announcements={announcements}
                    channels={channels} tools={tools} resources={resources}  />
      : <OpportunitiesGuest />;

    // const view = <OpportunitiesMemeber jobs={ this.props.jobs } />;

    return (
      <div>
        {view}
      </div>
    )
  }
}

export default connect(mapUserToProps)(Opportunities);
