/*
 Contains basic information for a club.
 Appears at /find-clubs
 */

import React from 'react';
import { Link } from 'gatsby';
import { ChevronRight } from 'react-feather';

// Local modules.
import Layout3Col from './../../layouts/layout-3col/layout-3col';
import ShadowBox from './../shadow-box/shadow-box';

import './club-teaser.scss';

export const ClubTeaser = props => {
  const title = props.club.title;
  const subtitle = props.club.subtitle;
  const image = props.club.imageUrl;
  const classes = props.className ? props.className : '';

  return (
    <div className={`${classes} club-teaser`}>
      <ShadowBox className="club-teaser__inner">
        <div className="club-teaser__image-wrapper">
          <img src={image} alt={title} className="club-teaser__image" />
        </div>
        <div className="club-teaser__text">
          <span className="club-teaser__title">{title}</span>
          <span className="club-teaser__description"> {subtitle} </span>
          <div className="button button--x-small club-teaser__button">
            <Link to="/club" className="club-teaser__link">
              Club page <ChevronRight size={16} className="icon" />
            </Link>
          </div>
        </div>
      </ShadowBox>
    </div>
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
