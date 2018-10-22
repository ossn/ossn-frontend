import React from 'react';
import { graphql } from "gatsby";

// Local modules.
import BasicLayout from '../components/layouts/layout-base/layout-base';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';
import OrganizationList from './../components/components/organizations-list/organizations-list';
import BecomeMember from './../components/components/home-become-member/home-become-member';

const IndexPage = (props) => {
  return (
    <BasicLayout>

      {/* New section */}
      <LayoutContained>
        <h1> What's happening </h1>
        <div>
          <div >
            <div>
              <div>
                <img src="#" alt="read our blog update" />
                <img src="#" alt="Mozilla news" />
              </div>
              <div>
                <img src="#" alt="In open source, we feel strongly..." />
                <img src="#" alt="opportunities" />
              </div>
            </div>
            <div>
              <img src="#" alt="fix me" />
              <img src="#" alt="liste to our podcast" />
            </div>
          </div>
        </div>
      </LayoutContained>

      {/* why join the OSSN? */}
      <LayoutContained>
        <BecomeMember />
      </LayoutContained>

      {/* Organizations */}
      <LayoutContained>
        <OrganizationList  organizations={props.data.allOrganizationsJson.edges}/>
      </LayoutContained>

    </BasicLayout>
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
