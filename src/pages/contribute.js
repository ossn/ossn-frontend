/**
 *  Page for member opportunities under '/contribute' url.
 *  gets the opportunities component and fetches the data for
 *  job listing
 *  announcements
 *  tools for contributing
 *  communication channels
 **/
// import style
import './../components/components/promoted-box/promoted-box.scss';

import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import BasicLayout from '../components/layouts/layout-base/layout-base';
import GatsbyConfig from './../../gatsby-config';
import Opportunities from './../components/components/opportunities/opportunities';

// TODO: Remove and fid title another way.
class Contribute extends React.PureComponent {
  render() {
    const jobs = this.props.data.ossnApi.jobs;
    const announcements = this.props.data.ossnApi.announcements;
    const channels = this.props.data.allCommunicationChannelsJson;
    const tools = this.props.data.allToolsForContributingJson;
    const resources = this.props.data.allTrainingResourcesJson;

    return (
      <BasicLayout>
        <Helmet>
          <title>
            {['Opportunities', '|', GatsbyConfig.siteMetadata.title].join(' ')}
          </title>
        </Helmet>

        <Opportunities
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
  }
`;
