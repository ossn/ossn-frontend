import "./opportunities-member.scss";

import React from "react";
import MemberUpdates from "./../member-updates/member-updates";
import MemberTools from "./../member-tools/member-tools";
import MemberTrainingResources from "./../member-training-resources/member-training-resources";
import PromotedBox from "./../promoted-box/promoted-box";
import LayoutContained from "./../../layouts/layout-contained/layout-contained";
import Layout2ColUnequal from "./../../layouts/layout-2col-unequal/layout-2col-unequal";

/**
 * A simple wrapper for the upper section i.e. the title, description and promoted box.
 * Appears at /contribute and for logged in users.
 */
const UpperSection = () => {
  return (
    <LayoutContained>
      <h1 className="title title--m-small opportunities-member__title">
        Opportunities
      </h1>

      <Layout2ColUnequal secondNarrow className="opportunities-member__info">
        <div>
          <div className="opportunities-member__text highlighted-text">
            <p>
              We bring you the best opportunities to contribute code. Practice
              your skills by taking part in compelling Open Source projects that
              match your interests!
            </p>
          </div>
        </div>

        <div className="promoted-box__wrapper">
          <PromotedBox />
        </div>
      </Layout2ColUnequal>
    </LayoutContained>
  );
};

/**
 * Wraps the contribute page as shown to a user with the member role and add
 * some content at the upper section.
 * Appears at /contribute and /leaders-corner.
 *
 * Props contain:
 * skipTitle, if present, the component does not add extra data.
 * announcements, the list of the announcements objects.
 * jobs, the list of the job objects.
 * resources, the list of the resources objects.
 *
 * @param props
 */
export default props => {
  const upperSection = props.skipTitle ? "" : <UpperSection />;

  return (
    <div className="opportunities-member">
      {upperSection}
      <div className="slice slice--dark">
        <MemberUpdates announcements={props.announcements} jobs={props.jobs} />
      </div>
      <MemberTools channels={props.channels} tools={props.tools} />
      <div className="slice slice--dark slice--last">
        <MemberTrainingResources resources={props.resources} />
      </div>
    </div>
  );
};
