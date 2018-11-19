// external modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import BasicLayout from '../components/layouts/layout-base/layout-base';
import GatsbyConfig from './../../gatsby-config';
// import Club from './../components/components/club-full/club-full';

// TODO: Remove and fid title another way.
class Clubs extends React.PureComponent {
  render() {
    // TODO: remove the mock club after the connection with back end.
    console.log(this.props);

    return (
      <BasicLayout>
        <Helmet>
          <title>
            {['Clubs', '|', GatsbyConfig.siteMetadata.title].join(' ')}
          </title>
        </Helmet>

        {/*<Club id={this.props.data.ossnApi.clubs.clubs.id} />*/}
      </BasicLayout>
    );
  }
}

export default Clubs;

// TODO that query should be removed.
export const query = graphql`
  query($clubId: ID!) {
    ossnApi {
      club(id: $clubId) {
        id
      }
    }
  }
`;
