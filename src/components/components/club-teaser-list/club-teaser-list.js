/*
 Contains basic information for a club.
 Appears at /find-club
 */

import React from 'react';
import { Link } from 'gatsby';
import { ChevronRight } from 'react-feather';

// Local modules.
import Layout3Col from './../../layouts/layout-3col/layout-3col';
import ShadowBox from './../shadow-box/shadow-box';

export const ClubTeaser = props => {
  const title = props.club.title;
  const subtitle = props.club.subtitle;
  const image = props.club.imageUrl;

  return (
    <div className={`${props.className} teaser-box`}>
      <ShadowBox>
        <div className="teaser-box__inner">
          <div className="teaser-box__image-wrapper">
            <img src={image} alt={title} className="teaser-box__image" />
          </div>
          <div className="teaser-box__text">
            <span className="highlighted-text highlighted-text--small club-teaser__title">
              {' '}
              {title}{' '}
            </span>
            <span className=""> {subtitle} </span>
            <Link to="/club" className="button button--x-small">
              Club page <ChevronRight />
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
