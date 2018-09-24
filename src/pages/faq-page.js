import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// Import page title from gatsby config. TODO Remove and fid title another way.
import BasicLayout from './../components/layouts/base/base';
import GatsbyConfig from './../../gatsby-config';
import FaqGroup from './../components/components/faq-group/faq-group';

const Questions = (props) => {

  const resultGroups = props.data.allDataJson.edges[0].node;
  const group0 = resultGroups.group0;
  const group1 = resultGroups.group1;
  const group2 = resultGroups.group2;
  const group3 = resultGroups.group3;

  return (
    <BasicLayout>
      <Helmet>
        <title>{['FAQ', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
      </Helmet>

      <FaqGroup group={group0} />
      <FaqGroup group={group1} />
      <FaqGroup group={group2} />
      <FaqGroup group={group3} />

      Questions
    </BasicLayout>
  );
};

export default Questions;

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
