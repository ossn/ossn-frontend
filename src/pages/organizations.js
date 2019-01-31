/*
The container for the organizations page.
*/

// external modules
import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// Local modules.
import BasicLayout from '../components/layouts/layout-base/layout-base';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';
import Organization from './../components/components/organization/organization';
import Layout3Col from './../components/layouts/layout-3col/layout-3col';
import Layout2Col from './../components/layouts/layout-2col/layout-2col';
import Layout2ColsUnequal from './../components/layouts/layout-2col-unequal/layout-2col-unequal';
import MediaQuery from 'react-responsive';
import Shape from './../components/components/shape/shape';
import Banner from './../components/components/banner/banner';

import '../components/pages-styles/organizations.scss';

// Import page title from gatsby config.
import GatsbyConfig from './../../gatsby-config';

const Organizations = props => {
  const content = props.data.allOrganizationsJson.edges.map((node, i) => {
    return <Organization organization={node.org} key={i} />;
  });

  return (
    <BasicLayout location={props.location}>
      <Helmet>
        <title>
          {['Organization', '|', GatsbyConfig.siteMetadata.title].join(' ')}
        </title>
      </Helmet>
      <LayoutContained className="organizations">
        <Banner
          imageMobile={
            props.data.organizationsBannerImageMobile.childImageSharp
              .resolutions
          }
          image={
            props.data.organizationsBannerImageDesktop.childImageSharp.fluid
          }
          text=""
          title={['in unity,', 'there is', 'strength']}
          forPage="organizations"
        />

        <Layout2ColsUnequal
          secondNarrow
          horizontalGutters
          className="organizations__content"
        >
          <div>
            <div>
              <h1> Affiliations </h1>
              <p>
                Open Source is all about community, so we work closely with
                major groups and organizations already in this space like POSSE,
                GitHub, The GNOME Project and Red Hat. Below, you can discover
                who is sharing our mission and to find out how other
                contributors can get involved. We’re always looking for new
                organizations and individuals to drive our Network forward.
              </p>
            </div>

            <div>
              <Layout2Col verticalGutters horizontalGutters>
                <div>
                  <h2>Why to affiliate with us</h2>
                  <p>
                    <ul>
                      <li>
                        Work with skilled, diverse University Students from
                        around the U.S. and Canada
                      </li>
                      <li>
                        <b>Create together:</b> with students your Open Source
                        Project
                      </li>
                      <li>
                        <b>Learn through use:</b> have students provide early
                        feedback and identify bugs
                      </li>
                      <li>
                        <b>Network common interests:</b> students who are
                        interested about your Open Source Project can use and
                        advocate about it
                      </li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h2> Investement</h2>
                  <p>
                    Our role is to act as the layer between your projects and
                    our students through our Network.
                  </p>
                  <p>
                    We want to ensure that our students will be exposed to
                    meaningful contribution opportunities through a healthy and
                    pleasant experience while contributing to your project.
                  </p>
                  <p>
                    At the same time, we do not want to put additional overhead
                    or have your team allocate resources for specifically
                    supporting the students.
                  </p>
                  <p>
                    If you are interested having the amazing students of the
                    Open Source Student Network work with you, please reach out
                    to us at: ossn AT mozilla DOT com.
                  </p>
                </div>
              </Layout2Col>
            </div>
          </div>
          <div>
            <MediaQuery minWidth={992}>
              <div className="organizations__inner-image">
                <Img
                  fluid={
                    props.data.organizationsContentImage.childImageSharp.fluid
                  }
                />
                <Shape square seafoamBlue className="organizations__shape" />
              </div>
            </MediaQuery>
          </div>
        </Layout2ColsUnequal>

        <Layout3Col horizontalGutters verticalGutters early>
          {content}
        </Layout3Col>
      </LayoutContained>
    </BasicLayout>
  );
};

export default memo(Organizations);

export const query = graphql`
  {
    allOrganizationsJson {
      edges {
        org: node {
          ...organization
        }
      }
    }

    organizationsBannerImageDesktop: file(
      relativePath: { eq: "banners/affiliations-header_3x.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
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

    organizationsBannerImageMobile: file(
      relativePath: { eq: "banners/affiliations-header_3x.jpg" }
    ) {
      childImageSharp {
        resolutions(height: 300, width: 728, cropFocus: CENTER) {
          ...GatsbyImageSharpResolutions
        }
      }
    }

    organizationsContentImage: file(relativePath: { eq: "affiliations.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          base64
          tracedSVG
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
  }
`;
