// external modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// Local modules.
import BasicLayout from '../components/layouts/layout-base/layout-base';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';
import OpportunitiesMember from './../components/components/opportunities-member/opportunities-member';
import {AllLeaderTools} from './../components/components/leader-tools/leader-tools';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

class Contribute extends React.Component {
  render() {
    const jobs = this.props.data.ossnApi.jobs;
    const announcements = this.props.data.ossnApi.announcements;
    const channels = this.props.data.allCommunicationChannelsJson;
    const tools = this.props.data.allToolsForContributingJson;
    const resources = this.props.data.allTrainingResourcesJson;

    // HACK: : Data should be represented better
    const prManagement = this.props.data.leadersToolsJson.Project_Management_tools;
    const codeOfConduct = this.props.data.leadersToolsJson.Code_of_Conduct_examples;
    const leadersTools = this.props.data.leadersToolsJson.Various_tools;
    const leadersResources = this.props.data.leadersToolsJson.Useful_resources_running_a_club;

    return (
      <BasicLayout>
        <Helmet>
          <title>{["Leader's Corner", '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
        </Helmet>

        <LayoutContained>
          <h1> Leader's Corner </h1>
          <AllLeaderTools prManagement={prManagement} codeOfConduct={codeOfConduct}
            variousTools={leadersTools} usefulResources={leadersResources} />
        </LayoutContained>
        <OpportunitiesMember jobs={jobs} announcements={announcements}
                    channels={channels} tools={tools} resources={resources} />

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
      url
      icon
    }

    Code_of_Conduct_examples {
      title
      url
      icon
    }

    Various_tools {
      url
      title
      icon
    }

    Useful_resources_running_a_club {
      url
      title
      icon
    }
 }
}
`;
