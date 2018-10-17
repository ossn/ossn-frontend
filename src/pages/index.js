import React from 'react';
import { graphql } from "gatsby";

import BasicLayout from '../components/layouts/layout-base/layout-base';
import OrganizationList from './../components/components/organizations-list/organizations-list';
import BecomeMember from './../components/components/home-become-member/home-become-member';

const IndexPage = (props) => {
  console.log();
  return (
    <div>
      <div>
        <BasicLayout>

          {/* New section */}
          <div>
            <h1> What's happening </h1>
            <div>
              The pretty news section goes here :)

            </div>
          </div>

          {/* why join the OSSN? */}
          <div>
            <BecomeMember />
          </div>

          {/* Organizations */}
          <div>
            <OrganizationList  organizations={props.data.allOrganizationsJson.edges}/>
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
