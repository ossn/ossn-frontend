import React from 'react';
import { graphql } from "gatsby"

// local modules
import OrganizationTeaser from './../organization-teaser/organization-teaser';
import Layout5Col from './../../layouts/layout-5col/layout-5col';

// styles
import './organizations-list.scss';

export default (props) => {
  const organizations = props.organizations.map((node, i)=>{
    return <div key={i}><OrganizationTeaser organization={node.org}/></div>
  });

  return (
    <div className="">
      <h3 className="title title--medium title--centered">Our partners</h3>
      <Layout5Col horizontalGutters verticalGutters>
        {organizations}
      </Layout5Col>
    </div>
  );
}

export const query = graphql`
  fragment organization on OrganizationsJson {
    title
    image
    link
    description
  }
`;
