import React from 'react';
import OrganizationTeaser from './../organization-teaser/organization-teaser';
import { graphql } from "gatsby"

import './organizations-list.scss';

export default (props) => {
  const organizations = props.organizations.map((node, i)=>{
    return <OrganizationTeaser organization={node.org} key={i} />
  });

  return (
    <div className="organizations-list">
      {organizations}
    </div>
  );
}

export const query = graphql`
  fragment organization on OrganizationsJson {
    title
    image
    link
    descripion
  }
`;
