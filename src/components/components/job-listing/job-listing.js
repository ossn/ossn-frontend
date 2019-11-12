import React from "react";
import { graphql } from "gatsby";
import { TeaserBoxList } from "./../teaser-box/teaser-box";

/**
 * List of the jobs with their title.
 * Contains the jobs graphQL query fragment.
 * Appears at /contribute and /leaders-corner for the logged in users.
 * Props contain the jobs to be shown. If dummyData is contained in
 * props the logged out pages are generated which do not allow access to the
 * job listing.
 *
 * @param props
 */
export default props => {
  const items = props.jobs;

  return (
    <div>
      <h2 className="teaser-box__list-title" id="jobs">
        Jobs & internships board
      </h2>
      <div aria-labelledby="jobs">
        <TeaserBoxList items={items} dummyData={props.dummyData} />
      </div>
    </div>
  );
};

export const query = graphql`
  fragment JobBoardListing on OSSNAPI {
    jobs(first: 3) {
      jobs {
        id
        description: description
        title: sortDescription
        link: url
        date: publishedAt
        imageUrl
      }
    }
  }
`;
