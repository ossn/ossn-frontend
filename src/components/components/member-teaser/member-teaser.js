import './member-teaser.scss';

import { Link } from 'gatsby';
import React from 'react';
import { Users } from 'react-feather';

import Member from './../member/member';
import ShadowBox from './../shadow-box/shadow-box';

/*
 Is the the preview of a member profile.

 props:
   member (object): the member to be shown. */
const MemberTeaser = props => {
  const name = props.member.name;
  const imageUrl = props.member.imageUrl || null;
  const isLeader =
    props.member.clubs &&
    props.member.clubs.length > 0 &&
    props.member.clubs.some(club => {
      return club.role === 'admin';
    });

  const image = imageUrl ? (
    <div className="member-teaser__image-wrapper">
      <img src={imageUrl} className="member-teaser__image" alt={name} />
    </div>
  ) : (
    ''
  );

  let clubString = '';
  if (props.member.clubs && props.member.clubs.length > 0) {
    clubString = props.member.clubs[0].name || 'Club name is missing.';
    if (props.member.clubs.length > 1) {
      clubString += ' + ' + (props.member.clubs.length - 1) + ' more';
    }
  }
  // When the popup is open, the preview is loaded.
  let preview = <div />;
  if (props.open) {
    preview = <Member member={props.member} />;
  }

  // Show the leader tag for leaders.
  const leaderTag = isLeader ? (
    <span className="member-teaser__leader-tag">
      <span className="member-teaser__leader-tag-bg">
        <span className="member-teaser__leader-tag-top" />
        <span className="member-teaser__leader-tag-bottom" />
        <span className="member-teaser__leader-tag-bg-bottom" />
      </span>
      Club Leader
    </span>
  ) : (
    <></>
  );

  const inheritedClass = props.className ? props.className : '';
  const classes = [inheritedClass, 'member-teaser'];
  if (isLeader) classes.push('member-teaser--leader');

  return (
    <ShadowBox smallPaddings className={classes.join(' ')}>
      <div> {preview} </div>
      <Link to={`/members/${props.member.id}`} className="member-teaser__inner">
        {leaderTag}
        {image}
        <div className="member-teaser__text">
          <div className="member-teaser__name">{name}</div>
          <div className="member-teaser__clubs">
            <Users />
            <span> {clubString} </span>
          </div>
        </div>
      </Link>
    </ShadowBox>
  );
};

export default MemberTeaser;

//
// export const query = graphql`
//   fragment User on OSSNAPI {
//     userName
//     name
//     imageUrl
//     receiveNewsletter
//     description
//     githubUrl
//     personalUrl
//     email
//   }
// `;
