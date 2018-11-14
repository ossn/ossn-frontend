import React from 'react';
import Img from 'gatsby-image';
import MediaQuery from 'react-responsive';

import './banner.scss';

export default props => {
  const text = props.text || '';
  const targetClass = props.forPage ? `banner--${props.forPage}` : '';
  const classes = `banner ${targetClass}`;

  return (
    <div className={classes}>
      <MediaQuery maxWidth={992}>
        <Img resolutions={props.imageMobile} className="banner__image" />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Img fluid={props.image} className="banner__image" />
      </MediaQuery>
      <div className="banner__text">{text}</div>
    </div>
  );
};
