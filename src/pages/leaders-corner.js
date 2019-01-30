/**
 * Leader's corner is the opportunities page, plus the leaders tools.
 **/
// external modules
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import GatsbyConfig from './../../gatsby-config';

import BasicLayout from '../components/layouts/layout-base/layout-base';
import LeaderCorner from './../components/components/leaders-corner/leaders-corner';

// Local modules.
class Contribute extends React.PureComponent {
  render() {
    return (
      <BasicLayout>
        <Helmet>
          <title>
            {["Leader's Corner", '|', GatsbyConfig.siteMetadata.title].join(
              ' '
            )}
          </title>
        </Helmet>
        <LeaderCorner data={this.props.data} />
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
