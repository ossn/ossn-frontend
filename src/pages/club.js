// external modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import BasicLayout from '../components/layouts/layout-base/layout-base';
import GatsbyConfig from './../../gatsby-config';
import Club from './../components/components/club-full/club-full';

// TODO: Remove and fid title another way.
class Clubs extends React.PureComponent {
  render() {
    // TODO: remove the mock club after the connection with back end.
    const mockClub = this.props.data.ossnApi.clubs[0];

    return (
      <BasicLayout>
        <Helmet>
          <title>
            {['Clubs', '|', GatsbyConfig.siteMetadata.title].join(' ')}
          </title>
        </Helmet>

        <Club club={mockClub} />
      </BasicLayout>
    );
  }
}

export default Clubs;

// that query should be removed.
export const query = graphql`
  {
    ossnApi {
      clubs {
        id
        title: name
        subtitle: sortDescription
        imageUrl
        clubUrl
        location {
          id
          lat
          lng
        }
        users {
          userName
          firstName
          lastName
          imageUrl
          receiveNewsletter
          description
          githubUrl
          personalUrl
          email
        }
      }
    }
  }
`;
