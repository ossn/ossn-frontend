// external modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// local modules
import BasicLayout from '../components/layouts/layout-base/layout-base';
import MemeberUpdates from './../components/components/member-updates/member-updates';
import MemberTools from './../components/components/member-tools/member-tools';
import MemberTrainingResources from './../components/components/member-training-resources/member-training-resources';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

class Contribute extends React.Component {
  render() {
    console.log(this.props.data);
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

        <div>
          <h1> Opportunities </h1>
          <p>
            Lorem ipsum donor sit amet Lorem ipsum donor sit amet Lorem ipsum donor sit amet Lorem ipsum donor sit amet Lorem ipsum donor sit amet Lorem ipsum donor sit amet
            Lorem ipsum donor sit amet Lorem ipsum donor sit amet Lorem ipsum donor sit amet
          </p>
        </div>
        <MemeberUpdates />
        <MemberTools channels={channels} tools={tools} />
        <MemberTrainingResources resources={resources}/>
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
