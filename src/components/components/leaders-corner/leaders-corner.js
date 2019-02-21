import React from "react";
import { connect } from "react-redux";
import { AllLeaderTools } from "./../leader-tools/leader-tools";
import OpportunitiesMember from "./../opportunities-member/opportunities-member";
import OpportunitiesGuest from "./../opportunities-guest/opportunities-guest";
import LayoutContained from "./../../layouts/layout-contained/layout-contained";

import { mapUserToProps } from "./../../../utils/redux-utils";

// The contentn for authenticated users.
const AuthenticatedContent = data => {
  const jobs = data.props.ossnApi.jobs.jobs;
  const announcements = data.props.ossnApi.announcements.announcements;
  const channels = data.props.allCommunicationChannelsJson;
  const tools = data.props.allToolsForContributingJson;
  const resources = data.props.allTrainingResourcesJson;

  const prManagement = data.props.leadersToolsJson.Project_Management_tools;
  const codeOfConduct = data.props.leadersToolsJson.Code_of_Conduct_examples;
  const leadersTools = data.props.leadersToolsJson.Various_tools;
  const leadersResources =
    data.props.leadersToolsJson.Useful_resources_running_a_club;

  return (
    <>
      <LayoutContained>
        <h1> Leader&apos;s Corner </h1>
        <AllLeaderTools
          prManagement={prManagement}
          codeOfConduct={codeOfConduct}
          variousTools={leadersTools}
          usefulResources={leadersResources}
        />
      </LayoutContained>
      {/* Call opportunities-member with the skipTitle flag */}
      <OpportunitiesMember
        skipTitle
        jobs={jobs}
        announcements={announcements}
        channels={channels}
        tools={tools}
        resources={resources}
      />
    </>
  );
};

class LeaderCorner extends React.PureComponent {
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

export default connect(mapUserToProps)(LeaderCorner);
