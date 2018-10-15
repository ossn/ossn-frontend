import React from 'react';
import { graphql } from 'gatsby';

// // local modules
// import './../../../pages/contribute';
import ShadowBox from './../../components/shadow-box/shadow-box';

export default (props) => {
  return (
    <div>
      Opportunties page as a logged in user!

      <h2 className="title title-secondary"> Job board listing </h2>
      <ShadowBox data={ props.jobs } />
    </div>
  )
}

// Build job board to be used for logged in users on opportunities member
// component.
export const jobBoardFragment = graphql`
fragment JobBoardListing on OSSNAPI {
    jobs {
      id
      text: sortDescription
      url
      date: updatedAt
    }
  }
`;
