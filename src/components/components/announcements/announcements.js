import React from 'react';
import {graphql} from 'gatsby';
import { TeaserBoxList } from './../teaser-box/teaser-box';

export default (props) => {
  const items = props.announcements;

  return (
    <div>
      <h2> Latest announcements </h2>
      <div>
        <TeaserBoxList items={items} />
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
