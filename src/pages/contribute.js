// external modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// local modules
import Opportunities from './../components/components/opportunities/opportunities'
import BasicLayout from '../components/layouts/layout-base/layout-base';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

class Contribute extends React.Component {
  render() {
    return (
      <BasicLayout>
        <Helmet>
          <title>{['Opportunities', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
        </Helmet>
        <Opportunities jobBoardListing={ this.props.data.ossnApi.jobs } />
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
}
`;
