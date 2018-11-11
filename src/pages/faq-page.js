// styles
import './../components/pages-styles/about-page.scss';

import { graphql } from 'gatsby';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import BasicLayout from '../components/layouts/layout-base/layout-base';
import GatsbyConfig from './../../gatsby-config';
import FaqGroup from './../components/components/faq-group/faq-group';
import Layout2Cols from './../components/layouts/layout-2col/layout-2col';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';

// TODO: Remove and fid title another way.
const Questions = props => {
  // REVIEW:
  const resultGroups = props.data.allDataJson.edges[0]
    ? props.data.allDataJson.edges[0].node
    : {};
  const group0 = resultGroups.group0 ? resultGroups.group0 : [];
  const group1 = resultGroups.group1 ? resultGroups.group1 : [];
  const group2 = resultGroups.group2 ? resultGroups.group2 : [];
  const group3 = resultGroups.group3 ? resultGroups.group3 : [];

  return (
    <BasicLayout>
      <Helmet>
        <title>{['FAQ', '|', GatsbyConfig.siteMetadata.title].join(' ')}</title>
      </Helmet>

      <LayoutContained>
        <div className="faq__header">
          <h1 className="faq__title title"> FAQ </h1>
          <h2 className="faq__subtitle highlighted-text">
            The most Frequently Asked Questions on OSSN. <br />
            And their answers!
          </h2>
        </div>

        <Layout2Cols horizontalGutters>
          <div>
            <FaqGroup group={group0} id="faq-group-1" />
            <FaqGroup group={group1} id="faq-group-2" />
          </div>
          <div>
            <FaqGroup group={group2} id="faq-group-3" />
            <FaqGroup group={group3} id="faq-group-4" />
          </div>
        </Layout2Cols>

        <div className="faq__footer">
          <h2 className="faq__footer-title"> Have more questions? </h2>
          <p className="faq__footer-text title title--x-small">
            Cool! Reach out to us to
            <a href="https://www.facebook.com/"> Facebook </a>
            or
            <a href="https://twitter.com/"> Twitter </a>
          </p>
        </div>
      </LayoutContained>
    </BasicLayout>
  );
};

export default memo(Questions);

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          id
          group0 {
            header
            body
          }
          group1 {
            header
            body
          }
          group2 {
            header
            body
          }
          group3 {
            header
            body
          }
        }
      }
    }
  }
`;
