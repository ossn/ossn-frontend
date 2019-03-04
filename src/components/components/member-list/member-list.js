import React from "react";

import Layout2Col from "./../../layouts/layout-2col/layout-2col";
import MemberTeaser from "./../member-teaser/member-teaser";

/**
 * Member teaser list.
 * This component is used for showing a list of members.
 *
 * Props contain an the array of members to be shown.
 *
 * @param props
 */
export default class MemberList extends React.Component {
  getMembers() {
    return this.props.members.map(member => {
      return (
        <div key={member.id}>
          <MemberTeaser member={member} />
        </div>
      );
    });
  }

  render() {
    const members = this.getMembers();

    return (
      <Layout2Col horizontalGutters verticalGutters>
        {members}
      </Layout2Col>
    );
  }
}
