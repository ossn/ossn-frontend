import React from 'react';
import { graphql } from "gatsby";

import BasicLayout from './../components/layouts/base/base';
import OrganizationList from './../components/components/organizations-list/organizations-list';

const IndexPage = (props) => {
  return (
    <div>
      <div>
        <BasicLayout>
          Welcome to a gatsby project!
          <div>
            <OrganizationList organizations={props.data.allOrganizationsJson.edges} />
          </div>
        </BasicLayout>
      </div>
    </div>

  )
};

export default IndexPage;

export const query = graphql`
  {
    allOrganizationsJson {
      edges {
        node {
          title
          image
          link
          descripion
        }
      }
    }
  }
`;
