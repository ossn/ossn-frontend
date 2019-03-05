import "./member-teaser.scss";

import { Link } from "gatsby";
import React from "react";
import { Users } from "react-feather";

import ShadowBox from "./../shadow-box/shadow-box";

/**
 * Member teaser.
 * This component is used for showing a single member teaser linked to profile.
 *
 * Props contain an the member object.
 *
 * @param props
 */
const MemberTeaser = props => {
  const name = props.member.name;
  const imageUrl = props.member.imageUrl;
  const isLeader = props.member.clubs
    ? props.member.clubs.length > 0 &&
      props.member.clubs.some(club => {
        return club.role === "admin" || club.role === "club_owner";
      })
    : props.member.role &&
      (props.member.role === "admin" || props.member.role === "club_owner");

  const image = imageUrl ? (
    <div className="member-teaser__image-wrapper">
      <img src={imageUrl} className="member-teaser__image" alt={name} />
    </div>
  ) : (
    ""
  );

  let clubString = "";
  if (props.member.clubs && props.member.clubs.length > 0) {
    clubString = props.member.clubs[0].name || "Club name is missing.";
    if (props.member.clubs.length > 1) {
      clubString += " + " + (props.member.clubs.length - 1) + " more";
    }
  }

  /**
   * Show the leader tag for leaders.
   */
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

  const baseClass = "member-teaser";
  const classString = `${baseClass} ${isLeader ? baseClass + "--leader" : ""} ${
    props.className
  }`;

  return (
    <Link to={`/members/${props.member.id}`} className={classString}>
      <ShadowBox smallPaddings className="member-teaser__inner">
        {leaderTag}
        {image}
        <div className="member-teaser__text">
          <div className="member-teaser__name">{name}</div>
          {clubString && (
            <div className="member-teaser__clubs">
              <Users />
              <span> {clubString} </span>
            </div>
          )}
        </div>
      </ShadowBox>
    </Link>
  );
};

export default MemberTeaser;
