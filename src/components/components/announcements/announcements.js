import React from 'react';
import {graphql} from 'gatsby';
import { ExternalResourceList } from './../external-resource-teaser/external-resource-teaser';

export default (props) => {
  const items = props.announcements;

  return (
    <div>
      <h2> Latest announcements </h2>
      <div>
        <ExternalResourceList items={items} />
      </div>
    </div>
  );
}

export const query = graphql`
  fragment announcements on OSSNAPI {
    announcements {
      description
      sortDescription
      url
      updatedAt
    }
  }
`;
