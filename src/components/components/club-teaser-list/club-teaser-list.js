/*
 Contains basic information for a club.
 Appears at /find-clubs
 */

import React from "react";
import { Link } from "gatsby";
import { ChevronRight } from "react-feather";

// Local modules.
import Layout3Col from "./../../layouts/layout-3col/layout-3col";
import ShadowBox from "./../shadow-box/shadow-box";
import groupSmallImage from "../../../images/group-xsmall.jpg";
import "./club-teaser.scss";

export const ClubTeaser = props => {
  const title = props.club.name || "Club name is missing";
  const subtitle = props.club.sortDescription;
  const image = props.club.imageUrl;
  const classes = props.className ? props.className : "";
  return (
    <Link to={`/clubs/${props.club.id}`} className={`${classes} club-teaser`}>
      <ShadowBox className="club-teaser__inner">
        <div className="club-teaser__image-wrapper">
          <img
            src={image || groupSmallImage}
            alt={title}
            className="club-teaser__image"
          />
        </div>
        <div className="club-teaser__text">
          <h2 to={`/clubs/${props.club.id}`} className="club-teaser__title">
            {title}
          </h2>
          <span className="club-teaser__description"> {subtitle} </span>
          <div
            to={`/clubs/${props.club.id}`}
            className="button button--x-small club-teaser__button"
          >
            Club page <ChevronRight size={16} className="icon" />
          </div>
        </div>
      </ShadowBox>
    </Link>
  );
};

export const ClubTeaserList = props => {
  const clubs = props.clubs.map((club, i) => {
    return (
      <div key={i}>
        <ClubTeaser club={club} />
      </div>
    );
  });

  return (
    <Layout3Col horizontalGutters verticalGutters>
      {clubs}
    </Layout3Col>
  );
};
