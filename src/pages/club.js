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
    const mockClub = this.props.data.ossnApi.clubs.clubs[0];

    return (
      <BasicLayout>
        <Helmet>
          <title>
            {['Clubs', '|', GatsbyConfig.siteMetadata.title].join(' ')}
          </title>
        </Helmet>

        <Club
          club={mockClub}
          image={this.props.data.clubCoverImage}
          mobileImage={this.props.data.clubCoverImageMobile}
        />
      </BasicLayout>
    );
  }
}

export default Clubs;

// TODO that query should be removed.
export const query = graphql`
  {
    ossnApi {
      clubs {
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
            id
            userName
            firstName
            lastName
            imageUrl
            description
            githubUrl
            personalUrl
            email
            clubs {
              name
            }
          }
        }
      }
    }

    clubCoverImage: file(
      relativePath: { eq: "club-full/Museum_of_Byzantine_Culture.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1100, maxHeight: 200) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }

    clubCoverImageMobile: file(
      relativePath: { eq: "club-full/Museum_of_Byzantine_Culture.jpg" }
    ) {
      childImageSharp {
        resolutions(height: 300, width: 728, cropFocus: CENTER) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;
