// external modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import BasicLayout from '../components/layouts/layout-base/layout-base';
import GatsbyConfig from '../../gatsby-config';
import Club from '../components/components/club-full/club-full';

// TODO: Remove and fid title another way.
class Clubs extends React.PureComponent {
  render() {
    // TODO: remove the mock club after the connection with back end.

    return (
      <BasicLayout>
        <Helmet>
          <title>
            {['Clubs', '|', GatsbyConfig.siteMetadata.title].join(' ')}
          </title>
        </Helmet>

        <Club club={this.props.data.ossnApi.club} />
      </BasicLayout>
    );
  }
}

export default Clubs;

// TODO that query should be removed.
export const query = graphql`
  query singleClub($clubId: ID!) {
    ossnApi {
      club(id: $clubId) {
        id
        email
        location {
          id
          address
          lat
          lng
        }
        name
        imageUrl
        description
        codeOfConduct
        sortDescription
      }
    }
  }
`;
