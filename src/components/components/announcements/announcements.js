import React from "react";
import { graphql } from "gatsby";
import { TeaserBoxList } from "./../teaser-box/teaser-box";

/**
 * Contains the announcements component and graphQL query fragment.
 * Returns the list of the announcements with their title.
 * Appears at /contribute and /leaders-corner.
 * Props contain the announcements to be shown. If dummyData is contained in
 * props the logged out pages are generated which do not allow access to the
 * announcements.
 *
 * @param props
 */
export default props => {
  const items = props.announcements;

  return (
    <div>
      <h2 className="teaser-box__list-title" id="announcements">
        Latest announcements
      </h2>
      <div aria-labelledby="announcements">
        <TeaserBoxList items={items} dummyData={props.dummyData} />
      </div>
    </div>
  );
};

export const query = graphql`
  fragment announcements on OSSNAPI {
    announcements(first: 3) {
      announcements {
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
