import React from 'react';
import {graphql} from 'gatsby';
import { ExternalResourceList } from './../external-resource-teaser/external-resource-teaser';


export default (props) => {
  const items = [];
  return (
    <div>
      <h2> Jobs & interships board </h2>
      <div>
        <ExternalResourceList items={items} />
      </div>
    </div>
  )
}

export const query = graphql`
  fragment jobs on OSSNAPI {
    jobs {
      description
      sortDescription
      url
      updatedAt
    }
  }
`;
