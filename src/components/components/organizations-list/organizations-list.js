/*
  Contains the graphQL query for the organizations.
  A wrapper for organizations
*/
import React from 'react';
import { graphql } from 'gatsby';

import OrganizationTeaser from './../organization-teaser/organization-teaser';
import Layout5Col from './../../layouts/layout-5col/layout-5col';
import Shape from './../../components/shape/shape';

import './organizations-list.scss';

export default props => {
  const organizations = props.organizations.map((node, i) => {
    return (
      <div key={i}>
        <OrganizationTeaser organization={node.org} />
      </div>
    );
  });

  return (
    <section className="organizations-list">
      <div className="organizations-list__title-wrapper">
        <h3 className="title title--medium title--centered organizations-list__title">
          <Shape waves darkSkyBlue className="organizations-list__shape" />
          Our partners
        </h3>
      </div>
      <Layout5Col horizontalGutters verticalGutters>
        {organizations}
      </Layout5Col>
    </section>
  );
};

export const query = graphql`
  fragment organization on OrganizationsJson {
    title
    image
    link
    description
    attachment {
      publicURL
    }
  }
`;
