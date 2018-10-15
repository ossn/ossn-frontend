import React from 'react';
import { graphql } from 'gatsby';

// local modules
import MemberUpdates from './../member-updates/member-updates';
import MemberTools from './../member-tools/member-tools';
import MemberTrainingResources from './../member-training-resources/member-training-resources';

export default (props) => {
  console.log(props);
  return (
    <div>
      <MemberUpdates announcements={props.announcements} jobs={props.jobs} />
      <MemberTools channels={props.channels} tools={props.tools} />
      <MemberTrainingResources resources={props.resources}/>
    </div>
  );
}

// Build job board to be used for logged in users on opportunities member
// component.
// TODO: Remove that fragment
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
