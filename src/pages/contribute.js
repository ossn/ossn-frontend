// external modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// local modules
import BasicLayout from '../components/layouts/layout-base/layout-base';
import OpportunitiesMember from './../components/components/opportunities-member/opportunities-member';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

// import style
import './../components/components/promoted-box/promoted-box.scss';
// import './../components/base-styles/base/highlighted-text/_highlighted-text.scss'

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

        <div>
          <div>
          <h1> Opportunities </h1>
          <p className="highlighted-text highlighted-text--intense">
            Lorem ipsum donor sit amet Lorem ipsum donor sit amet Lorem ipsum donor sit amet Lorem ipsum donor sit amet Lorem ipsum donor sit amet Lorem ipsum donor sit amet
            Lorem ipsum donor sit amet Lorem ipsum donor sit amet Lorem ipsum donor sit amet
          </p>
          </div>
          <div className="promoted-box">
              <h3 className="promoted-box__title"> Next steps after signing up </h3>
            <ol className="promoted-box__content">
              <li> Explore contribution opportunities </li>
              <li> Reach out to  us </li>
              <li> Explore available interships/jobs </li>
              <li> Check the latest announcements </li>
            </ol>
          </div>
        </div>
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
}
`;
