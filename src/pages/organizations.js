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
//TODO: Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

const Organizations = props => {
  const content = props.data.allOrganizationsJson.edges.map((node, i) => {
    return <Organization organization={node.org} key={i} />;
  });

  const bannerContent = (
    <>
      <div className="title title--large"> in unity there is strength </div>
    </>
  );

  return (
    <BasicLayout>
      <Helmet>
        <title>
          {['Organization', '|', GatsbyConfig.siteMetadata.title].join(' ')}
        </title>
      </Helmet>
      <LayoutContained className="organizations">
        <Banner
          image={props.data.organizationsBanner.childImageSharp.fluid}
          text={bannerContent}
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
                Lorem ipsum dolor sit amet, nonumy lucilius et pro. Mel ut diam
                choro, propriae lucilius efficiendi an nam, suas facer qualisque
                no nec. An fugit soluta per. Ad mei debitis electram, officiis
                intellegat usu ei, ius eu zril intellegam consequuntur. Sumo
                delectus te nam, eam placerat salutandi no, nibh aperiam no ius.
                Id volumus sententiae interesset quo, natum scriptorem
                accommodare nam id, semper blandit ius ea.
              </p>
            </div>

            <div>
              <Layout2Col verticalGutters horizontalGutters>
                <div>
                  <h2>Who helps us?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, nonumy lucilius et pro. Mel ut
                    diam choro, propriae lucilius efficiendi an nam, suas facer
                    qualisque no nec. An fugit soluta per. Ad mei debitis
                    electram, officiis intellegat usu ei, ius eu zril intellegam
                    consequuntur. Sumo delectus te nam, eam placerat salutandi
                    no, nibh aperiam no ius. Id volumus sententiae interesset
                    quo, natum scriptorem accommodare nam id, semper blandit ius
                    ea.
                  </p>
                </div>
                <div>
                  <h2>Opportunities</h2>
                  <p>
                    Lorem ipsum dolor sit amet, nonumy lucilius et pro. Mel ut
                    diam choro, propriae lucilius efficiendi an nam, suas facer
                    qualisque no nec. An fugit soluta per. Ad mei debitis
                    electram, officiis intellegat usu ei, ius eu zril intellegam
                    consequuntur. Sumo delectus te nam, eam placerat salutandi
                    no, nibh aperiam no ius. Id volumus sententiae interesset
                    quo, natum scriptorem accommodare nam id, semper blandit ius
                    ea.
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

    organizationsBanner: file(
      relativePath: { eq: "affiliations-header_3x.jpg" }
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
