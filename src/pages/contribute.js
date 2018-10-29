// external modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// Local modules.
import BasicLayout from '../components/layouts/layout-base/layout-base';
import Opportunities from './../components/components/opportunities/opportunities';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

// import style
import './../components/components/promoted-box/promoted-box.scss';

class Contribute extends React.Component {
  render() {
    const jobs = this.props.data.ossnApi.jobs;
    const announcements = this.props.data.ossnApi.announcements;
    const channels = this.props.data.allCommunicationChannelsJson;
    const tools = this.props.data.allToolsForContributingJson;
    const resources = this.props.data.allTrainingResourcesJson;

    return (
      <BasicLayout>
        <Helmet>
          <title>{['Opportunities', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
        </Helmet>

        <Opportunities jobs={jobs} announcements={announcements}
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
}
`;
