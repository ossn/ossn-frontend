// styles
import '../components/layouts/layout-custom-grid/layout-custom-grid.scss';
import '../components/pages-styles/home-page.scss';

import { graphql } from 'gatsby';
import React, { memo } from 'react';

import BasicLayout from '../components/layouts/layout-base/layout-base';
import BlockquoteBox from './../components/components/blockquote-box/blockquote-box';
import BecomeMember from './../components/components/home-become-member/home-become-member';
import ImageBox from './../components/components/image-box/image-box';
import OrganizationList from './../components/components/organizations-list/organizations-list';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';
import Shape from './../components/components/shape/shape';
import Banner from './../components/components/banner/banner';

const IndexPage = props => {
  const bannerContent = (
    <>
      <div className="title title--large"> Open source clubs </div>
      <div className="text text--m-large">
        A network of university students and clubs who share the belief that
        open source software is the engine that powers innovation.
      </div>
    </>
  );

  return (
    <BasicLayout>
      {/* New section */}
      <LayoutContained>
        <Banner
          image={props.data.imageOne.childImageSharp.fluid}
          text={bannerContent}
          forPage="home"
        />
        <div className="home-page__page-title-wrapper">
          <h1 className="home-page__page-title">
            <Shape
              circle
              seafoamBlue
              className="home-page__page-title-circle"
            />
            What&apos;s happening
            <Shape
              waveLarge
              sunnyYellow
              className="home-page__page-title-wave-large"
            />
            <Shape
              triangle2
              lightNavy
              className="home-page__page-title-triangle"
            />
          </h1>
        </div>
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
      <LayoutContained className="home-page__partners-section">
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

    imageOne: file(relativePath: { eq: "homepage-header_3x.jpg" }) {
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
