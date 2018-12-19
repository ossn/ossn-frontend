/*
Contains the jobs graphQL query fragment.
Returns the list of the jobs with their title.
Appears at /contribute and /leaders-corner

  props
    dummyData: If present, lines with grey background is shown.
    jobs: A list of job and internships opportunities to be shown.

  The fields of the jobs should be the same as the graphQL query below.
*/

import React from 'react';
import { graphql } from 'gatsby';
import { TeaserBoxList } from './../teaser-box/teaser-box';

export default props => {
  const items = props.jobs;

  return (
    <div>
      <h2 className="teaser-box__list-title"> Jobs & internships board </h2>
      <div>
        <TeaserBoxList items={items} dummyData={props.dummyData} />
      </div>
    </div>
  );
};

export const query = graphql`
  fragment JobBoardListing on OSSNAPI {
    jobs(last: 3) {
      jobs {
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
