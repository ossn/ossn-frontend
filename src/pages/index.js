// styles
import '../components/layouts/layout-custom-grid/layout-custom-grid.scss';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React, { memo } from 'react';

import BasicLayout from '../components/layouts/layout-base/layout-base';
import BlockquoteBox from './../components/components/blockquote-box/blockquote-box';
import BecomeMember from './../components/components/home-become-member/home-become-member';
import ImageBox from './../components/components/image-box/image-box';
import OrganizationList from './../components/components/organizations-list/organizations-list';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';

const IndexPage = props => {
  return (
    <BasicLayout>
      {/* New section */}
      <LayoutContained>
        <div>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          {/* <TopBanner src={bannerImage} alt="Open source clubs" page="home" /> */}
        </div>
        <h1> What&apos;s happening </h1>
        <div>
          <div>
            <div>
              <div className="layout-custom-grid">
                {/*Read our blog*/}
                <div className="layout-custom-grid__item layout-custom-grid__item--1">
                  <ImageBox
                    centered
                    resource={props.data.allImageBoxJson.edges[0].node.box0}
                    className="image-box--1"
                  />
                </div>
                {/*See new opportunities*/}
                <div className="layout-custom-grid__item layout-custom-grid__item--2">
                  <ImageBox
                    orange
                    offset
                    resource={props.data.allImageBoxJson.edges[0].node.box1}
                    className="image-box--2"
                  />
                </div>
                {/*Listen to podcast*/}
                <div className="layout-custom-grid__item layout-custom-grid__item--3">
                  <ImageBox
                    light
                    end
                    resource={props.data.allImageBoxJson.edges[0].node.box2}
                    className="image-box--3"
                  />
                </div>
                {/*New kid on the block*/}
                <div className="layout-custom-grid__item layout-custom-grid__item--4">
                  <ImageBox
                    orange
                    resource={props.data.allImageBoxJson.edges[0].node.box3}
                    className="image-box--4"
                  />
                </div>
                {/*News*/}
                <div className="layout-custom-grid__item layout-custom-grid__item--5">
                  <ImageBox
                    light
                    large
                    end
                    resource={props.data.allImageBoxJson.edges[0].node.box4}
                    className="image-box--5"
                  />
                </div>
                <div className="layout-custom-grid__item layout-custom-grid__item--6">
                  <BlockquoteBox
                    blockquote="In open source, we feel strongly that to really do something well, you have to get a lot of people involved."
                    author="Linus Torvalds"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutContained>

      {/* why join the OSSN? */}
      <div className="slice slice--always-dark">
        <LayoutContained>
          <BecomeMember />
        </LayoutContained>
      </div>

      {/* Organizations */}
      <LayoutContained>
        <OrganizationList
          organizations={props.data.allOrganizationsJson.edges}
        />
      </LayoutContained>
    </BasicLayout>
  );
};

export default memo(IndexPage);

export const query = graphql`
  {
    allOrganizationsJson {
      edges {
        org: node {
          ...organization
        }
      }
    }

    imageOne: file(relativePath: { eq: "home.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
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

    allImageBoxJson {
      edges {
        node {
          box0 {
            titleLargeTop
            titleSmall
            titleLargeBottom
            link
            internalLink
            image {
              src {
                childImageSharp {
                  fluid(maxWidth: 352) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          box1 {
            titleSmall
            titleLargeBottom
            link
            internalLink
            image {
              src {
                childImageSharp {
                  fluid(maxWidth: 352) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          box2 {
            titleLargeTop
            titleSmall
            titleLargeBottom
            link
            internalLink
            image {
              src {
                childImageSharp {
                  fluid(maxWidth: 352) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          box3 {
            titleLargeTop
            titleSmall
            link
            internalLink
            image {
              src {
                childImageSharp {
                  fluid(maxWidth: 352) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          box4 {
            titleLargeTop
            titleSmall
            link
            internalLink
            image {
              src {
                childImageSharp {
                  fluid(maxWidth: 728) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
