import React from 'react';
import {graphql} from 'gatsby';
import { TeaserBoxList } from './../teaser-box/teaser-box';


export default (props) => {
  const items = props.jobs;

  return (
    <div>
      <h2> Jobs & interships board </h2>
      <div>
        <TeaserBoxList items={items} />
      </div>
    </div>
  )
}

export const query = graphql`
  fragment JobBoardListing on OSSNAPI {
    jobs {
      description: description
      title: sortDescription
      link: url
      date: updatedAt
      imageUrl
    }
  }
`;
