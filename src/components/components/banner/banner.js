import React from 'react';
import Img from 'gatsby-image';

import './banner.scss';

export default props => {
  const text = props.text || '';
  const targetClass = props.forPage ? `banner--${props.forPage}` : '';
  const classes = `banner ${targetClass}`;

  return (
    <div className={classes}>
      <Img fluid={props.image} className="banner__image" />
      <div className="banner__text">{text}</div>
    </div>
  );
};
