/**
 * Leader's corner is the opportunities page, plus the leaders tools.
 **/
// external modules
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

// Local modules.
import BasicLayout from '../components/layouts/layout-base/layout-base';
import GatsbyConfig from './../../gatsby-config';
import { AllLeaderTools } from './../components/components/leader-tools/leader-tools';
import OpportunitiesMember from './../components/components/opportunities-member/opportunities-member';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';

// TODO: Remove and fid title another way.
class Contribute extends React.PureComponent {
  render() {
    const jobs = this.props.data.ossnApi.jobs.jobs;
    const announcements = this.props.data.ossnApi.announcements.announcements;
    const channels = this.props.data.allCommunicationChannelsJson;
    const tools = this.props.data.allToolsForContributingJson;
    const resources = this.props.data.allTrainingResourcesJson;

    // HACK: : Data should be represented better
    const prManagement = this.props.data.leadersToolsJson
      .Project_Management_tools;
    const codeOfConduct = this.props.data.leadersToolsJson
      .Code_of_Conduct_examples;
    const leadersTools = this.props.data.leadersToolsJson.Various_tools;
    const leadersResources = this.props.data.leadersToolsJson
      .Useful_resources_running_a_club;

    return (
      <BasicLayout>
        <Helmet>
          <title>
            {["Leader's Corner", '|', GatsbyConfig.siteMetadata.title].join(
              ' '
            )}
          </title>
        </Helmet>

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
      </BasicLayout>
    );
  }
}

export default Contribute;

export const query = graphql`
  {
    ossnApi {
      ...JobBoardListing
      ...announcements
    }

    allCommunicationChannelsJson {
      edges {
        node {
          ...CommunicationChannel
        }
      }
    }

    allToolsForContributingJson {
      edges {
        node {
          ...MemberTools
        }
      }
    }

    allTrainingResourcesJson {
      edges {
        node {
          ...TrainingResources
        }
      }
    }

    leadersToolsJson {
      Project_Management_tools {
        title
        link
        attachment {
          publicURL
        }
      }

      Code_of_Conduct_examples {
        title
        link
        attachment {
          publicURL
        }
      }

      Various_tools {
        title
        link
        attachment {
          publicURL
        }
      }

      Useful_resources_running_a_club {
        title
        link
        attachment {
          publicURL
        }
      }
    }
  }
`;
