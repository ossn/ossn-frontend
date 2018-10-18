import React from 'react';
import { graphql } from "gatsby";

import BasicLayout from '../components/layouts/layout-base/layout-base';
import OrganizationList from './../components/components/organizations-list/organizations-list';
import BecomeMember from './../components/components/home-become-member/home-become-member';

const IndexPage = (props) => {
  return (
    <div>
      <div>
        <BasicLayout>

          {/* New section */}
          <div>
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
