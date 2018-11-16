/*
Contains the announcements graphQL query fragment.
Returns the list of the announcements with their title.
Appears at /contribute and /leaders-corner

  props
    dummyData: If present, lines with grey background is shown.
    announcements: A list of announcements to be shown.

  The fields of the announcements should be the same as the graphQL query below.

*/

import React from 'react';
import { graphql } from 'gatsby';
import { TeaserBoxList } from './../teaser-box/teaser-box';

export default props => {
  const items = props.announcements;

  return (
    <div>
      <h2 className="teaser-box__list-title"> Latest announcements </h2>
      <div>
        <TeaserBoxList items={items} dummyData={props.dummyData} />
      </div>
    </div>
  );
};

// TODO: request the shortDescription typo fix
export const query = graphql`
  fragment announcements on OSSNAPI {
    announcements {
      announcements {
        id
        description: description
        title: sortDescription
        link: url
        date: updatedAt
        imageUrl
      }
    }
  }
`;
