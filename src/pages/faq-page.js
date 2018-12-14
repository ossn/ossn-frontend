// styles
import '../components/pages-styles/faq-page.scss';

import { graphql } from 'gatsby';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import BasicLayout from '../components/layouts/layout-base/layout-base';
import GatsbyConfig from './../../gatsby-config';
import FaqGroup from './../components/components/faq-group/faq-group';
import Layout2Cols from './../components/layouts/layout-2col/layout-2col';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';
import Shape from './../components/components/shape/shape';
import FaqItem from './../components/components/faq-item/faq-item';

// TODO: Remove and fid title another way.
const Questions = props => {
  return (
    <BasicLayout>
      <Helmet>
        <title>{['FAQ', '|', GatsbyConfig.siteMetadata.title].join(' ')}</title>
      </Helmet>

      <LayoutContained>
        <div className="faq__header">
          <h1 className="faq__title title"> FAQ </h1>
          <h2 className="faq__subtitle highlighted-text">
            <div className="faq__subtitle-text">
              The most Frequently Asked Questions on OSSN. <br />
              And their answers!
              <span className="faq__header-shape faq__header-shape--square">
                <Shape square seafoamBlue />
              </span>
              <span className="faq__header-shape faq__header-shape--waves">
                <Shape waves darkSkyBlue />
              </span>
            </div>
          </h2>
        </div>

        <Layout2Cols horizontalGutters>
          <div>
            <FaqGroup id="faq-group-1" header="Joining OSSN">
              <FaqItem header="Title 1" id="faq-1-item-1">
                If you don’t have an established club but would like to start an
                open source club you are welcome to apply. Fill out the
                registration form and indicate that you’re starting a new club.
                We’ll send you materials and tips for launching a successful
                club.
              </FaqItem>
            </FaqGroup>

            <FaqGroup id="faq-group-2" header="Registering a club">
              <FaqItem header="Title 2" id="faq-2-item-1">
                If you don’t have an established club but would like to start an
                open source club you are welcome to apply. Fill out the
                registration form and indicate that you’re starting a new club.
                We’ll send you materials and tips for launching a successful
                club.
              </FaqItem>
              <FaqItem header="Title 3" id="faq-2-item-2">
                If you don’t have an established club but would like to start an
                open source club you are welcome to apply. Fill out the
                registration form and indicate that you’re starting a new club.
                We’ll send you materials and tips for launching a successful
                club.
              </FaqItem>
            </FaqGroup>
          </div>
          <div>
            <FaqGroup id="faq-group-3" header="Creating a club">
              <FaqItem header="Title 4" id="faq-3-item-1">
                If you don’t have an established club but would like to start an
                open source club you are welcome to apply. Fill out the
                registration form and indicate that you’re starting a new club.
                We’ll send you materials and tips for launching a successful
                club.
              </FaqItem>
            </FaqGroup>
            <FaqGroup id="faq-group-4" header="Running a club">
              <FaqItem header="Title 4" id="faq-3-item-1">
                If you don’t have an established club but would like to start an
                open source club you are welcome to apply. Fill out the
                registration form and indicate that you’re starting a new club.
                We’ll send you materials and tips for launching a successful
                club.
              </FaqItem>
            </FaqGroup>
          </div>
        </Layout2Cols>

        <div className="faq__footer">
          <h2 className="faq__footer-title"> Have more questions? </h2>
          <p className="faq__footer-text title title--x-small">
            Cool! Reach out to us to
            <a href="https://www.facebook.com/"> Facebook </a>
            or
            <a href="https://twitter.com/"> Twitter </a>
            <Shape waveLarge sunnyYellow className="faq__footer-shape" />
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
