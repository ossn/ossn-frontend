// external modules
import React from 'react';
import BasicLayout from '../components/layouts/layout-base/layout-base';
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby"

// local modules
import Organization from './../components/components/organization/organization';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

const Organizations = (props) => {

  return (
    <BasicLayout>
      <Helmet>
        <title>{['Organization', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
      </Helmet>
      {
        props.data.allOrganizationsJson.edges.map((node, i)=>{
          return <Organization organization={node.org}  key={i}/>
        })
      }

    </BasicLayout>
  );
};

export default Organizations;


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
