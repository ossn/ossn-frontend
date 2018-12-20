import React from 'react';
import Shape from './../shape/shape';

import './banner.scss';

export default props => {
  const text = props.text ? (
    <div className="banner__text"> {props.text} </div>
  ) : (
    ''
  );

  const title = props.title ? (
    <h2 className="title title--large">
      {props.title.map((titleElement, index) => (
        <span key={index} className="banner__title-element">
          {' '}
          {titleElement}{' '}
        </span>
      ))}
    </h2>
  ) : (
    ''
  );

  const targetClass = props.forPage ? `banner--${props.forPage}` : '';
  const classes = `banner ${targetClass}`;

  let hasShapes = false;
  if (
    props.forPage &&
    (props.forPage === 'about' || props.forPage === 'organizations')
  ) {
    hasShapes = true;
  }

  const bannerShapes = hasShapes
    ? [
        <Shape key="1" wave className="banner__wave" />,
        <Shape key="2" cube className="banner__cube" />,
        <Shape key="3" waveLarge className="banner__wave-large" />
      ]
    : '';

  return (
    <article className={classes}>
      <div className="banner__image-wrapper">
        <img src={props.image} className="banner__image" alt="" />
      </div>
      <div className="banner__content">
        <div className="banner__content-inner">
          {title}
          {text}
          {bannerShapes}
        </div>
      </div>
    </article>
  );
};
