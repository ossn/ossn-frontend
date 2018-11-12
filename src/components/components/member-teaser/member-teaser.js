/*
  Is the the preview of a member profile.

  props:
    member (object): the member to be shown.
*/
import React from 'react';
import { Users } from 'react-feather';

import Member from './../member/member';
import ShadowBox from './../shadow-box/shadow-box';
// utils
import { returnKeyCheck } from './../../../utils/accessibility';

import './member-teaser.scss';

const MemberTeaser = props => {
  const handleClick = () => {
    if (props.onClick) props.onClick(props.id);
  };

  const name = `${props.member.firstName} ${props.member.lastName}`;
  const imageUrl =
    props.member.imageUrl ||
    'http://assets.nydailynews.com/polopoly_fs/1.2479149.1451350340!/img/httpImage/image.jpg_gen/derivatives/article_750/motorhead29n-2-web.jpg';
  const clubString = 'RIT Linux Users Group';

  // Whean the popup is open, the preview is loaded.
  let preview = <div />;
  if (props.open) {
    preview = <Member member={props.member} />;
  }

  // Show the leader tag for leaders.
  const leaderTag = props.member.isLeader ? (
    <span className="member-teaser__leader-tag"> Club Leader </span>
  ) : (
    ''
  );

  const inheritedClass = props.className ? props.className : '';
  const classes = [inheritedClass, 'member-teaser'];
  if (props.member.isLeader) classes.push('member-teaser--leader');

  return (
    <ShadowBox smallPaddings className={classes.join(' ')}>
      <div> {preview} </div>
      <div
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={event => {
          returnKeyCheck(event, handleClick);
        }}
        className="member-teaser__inner"
      >
        {leaderTag}
        <div className="member-teaser__image-wrapper">
          <img src={imageUrl} className="member-teaser__image" alt={name} />
        </div>
        <div className="member-teaser__text">
          <div className="member-teaser__name"> {name} </div>
          <div className="member-teaser__clubs">
            <Users />
            <span> {clubString} </span>
          </div>
        </div>
      </div>
    </ShadowBox>
  );
};

export default MemberTeaser;

//
// export const query = graphql`
//   fragment User on OSSNAPI {
//     userName
//     firstName
//     lastName
//     imageUrl
//     receiveNewsletter
//     description
//     githubUrl
//     personalUrl
//     email
//   }
// `;
