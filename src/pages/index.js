import React from 'react';
import { graphql } from "gatsby";

import BasicLayout from './../components/layouts/base/base';
import OrganizationList from './../components/components/organizations-list/organizations-list';
import BecomeMember from './../components/components/home-become-member/home-become-member';

const IndexPage = (props) => {
  console.log();
  return (
    <div>
      <div>
        <BasicLayout>
          Welcome to a gatsby project!
          <div>
            <OrganizationList  organizations={props.data.allOrganizationsJson.edges}/>
          </div>
          <div>
            <BecomeMember />
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
        org: node {
        ...organization
  	    }
      }
    }
  }
`;
