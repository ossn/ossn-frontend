/*
  List of member-teaser elements
  Prints a list of Members at a two column layout.
  props: members (array of MemberTeaser), the members to be shown
*/

import React from 'react';

import Layout2Col from './../../layouts/layout-2col/layout-2col';
import MemberTeaser from './../member-teaser/member-teaser';

export default class MemberList extends React.Component {
  getMembers() {
    const list = this.props.members.map((member, i) => {
      return (
        <div key={i}>
          <MemberTeaser member={member} id={i} />
        </div>
      );
    });
    return list;
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
