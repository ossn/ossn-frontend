/*
Contains the announcements graphQL query fragment.
Returns the list of the announcements with their title.
Appears at /contribute and /leaders-corner
*/

import React from 'react';
import {graphql} from 'gatsby';
import { TeaserBoxList } from './../teaser-box/teaser-box';

export default (props) => {
  const items = props.announcements;

  return (
    <div>
      <h2> Latest announcements </h2>
      <div>
        <TeaserBoxList items={items} dummyData={props.dummyData}/>
      </div>
    </div>
  );
}

// TODO: request the shortDescription typo fix
export const query = graphql`
  fragment announcements on OSSNAPI {
    announcements {
      description: description
      title: sortDescription
      link: url
      date: updatedAt
      imageUrl
    }
  }
`;
