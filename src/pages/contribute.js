// external modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// local modules
import BasicLayout from '../components/layouts/layout-base/layout-base';
import Opportunities from './../components/components/opportunities/opportunities';
import Announcements from './../components/components/announcements/announcements';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

class Contribute extends React.Component {
  render() {
    console.log(this.props.data);
    const jobs = this.props.data.ossnApi.jobs;
    const announcements = this.props.data.allAnnouncementsJson.edges.map((node, i)=>{
       return node.node;
    });

    return (
      <BasicLayout>
        <Helmet>
          <title>{['Opportunities', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
        </Helmet>
        <Opportunities jobs={jobs} />
        <Announcements  announcements={announcements} />
      </BasicLayout>
    );
  }
}

export default Contribute;

export const query = graphql`
{
  ossnApi {
    ...JobBoardListing
  }

  allAnnouncementsJson {
    edges {
      node {
        ...announcements
     	 }
    }
  }
}
`;
