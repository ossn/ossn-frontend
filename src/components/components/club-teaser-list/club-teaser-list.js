import React from 'react';

// Local modules.
import Layout3Col from './../../layouts/layout-3col/layout-3col';
import ShadowBox from './../shadow-box/shadow-box';

export const ClubTeaser = (props) => {

  const title = props.club.title;
  const subtitle = props.club.subtitle;
  const link = props.club.clubUrl;
  const image = props.club.imageUrl;

  return (
    <ShadowBox>
      <div>
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
          <span> {title} </span>
          <span> {subtitle}  </span>
          <a href={link} >
            Club page
          </a>
        </div>
      </div>
    </ShadowBox>
  )
};

export const ClubTeaserList = (props) => {

  const clubs = props.clubs.map((club, i) => {
    return (
      <ClubTeaser club={club} key={i} />
    );
  });

  return (
    <Layout3Col>
      {clubs}
    </Layout3Col>
  )
};
