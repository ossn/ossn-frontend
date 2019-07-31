import "./club-teaser.scss";

import React from "react";
import { Link } from "gatsby";
import { ChevronRight } from "react-feather";
import Layout3Col from "./../../layouts/layout-3col/layout-3col";
import ShadowBox from "./../shadow-box/shadow-box";
import groupSmallImage from "../../../images/group-xsmall.jpg";

/**
 * Club teaser showing title, image, short description and linked to club full
 * view.
 * Appears at /clubs
 *
 * @param props
 */
export const ClubTeaser = props => {
  const title = props.club.name || "Club name is missing";
  const subtitle = props.club.sortDescription;
  const image = props.club.imageUrl;
  const classes = props.className ? props.className : "";
  return (
    <Link
      to={`/clubs/${props.club.id}`}
      className={`${classes} club-teaser`}
      aria-labelledby={title.replace(/\s/g, "")}
    >
      <ShadowBox className="club-teaser__inner">
        <div className="club-teaser__image-wrapper">
          <img
            src={image || groupSmallImage}
            alt={`${title} club logo`}
            className="club-teaser__image"
          />
        </div>
        <div className="club-teaser__text">
          <h2 className="club-teaser__title" id={title.replace(/\s/g, "")}>
            {title}
          </h2>
          <span className="club-teaser__description"> {subtitle} </span>
          <div className="button button--x-small club-teaser__button">
            Club page <ChevronRight size={16} className="icon" />
          </div>
        </div>
      </ShadowBox>
    </Link>
  );
};

/**
 * Constructs club teaser list.
 *
 * @param props
 */
export const ClubTeaserList = props => {
  const clubs = props.clubs.map(club => {
    return (
      <div key={club.id}>
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
