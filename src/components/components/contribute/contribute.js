import React from 'react';
import { connect } from 'react-redux';
import Opportunities from './../opportunities/opportunities';
import OpportunitiesGuest from './../opportunities-guest/opportunities-guest';

import { mapUserToProps } from './../../../utils/redux-utils';

// The contentn for authenticated users.
const AuthenticatedContent = data => {
  const jobs = data.props.ossnApi.jobs.jobs;
  const announcements = data.props.ossnApi.announcements.announcements;
  const channels = data.props.allCommunicationChannelsJson;
  const tools = data.props.allToolsForContributingJson;
  const resources = data.props.allTrainingResourcesJson;

  return (
    <>
      <Opportunities
        jobs={jobs}
        announcements={announcements}
        channels={channels}
        tools={tools}
        resources={resources}
      />
    </>
  );
};

class ContributeContent extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.user.user !== undefined ? (
          <div>
            <AuthenticatedContent props={this.props.data} />
          </div>
        ) : (
          <OpportunitiesGuest />
        )}
      </>
    );
  }
}

export default connect(mapUserToProps)(ContributeContent);
