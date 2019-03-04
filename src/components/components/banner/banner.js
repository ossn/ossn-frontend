import "./banner.scss";

import React from "react";
import Shape from "./../shape/shape";
import Img from "gatsby-image";
import MediaQuery from "react-responsive";

/**
 * Banner component.
 * Is used at front, about us and organizations pages.
 * Front page uses the default component and the rest variants.
 * All variants have image, title and shapes, only the default has text.
 *
 * @param props
 */
export default props => {
  const text = props.text ? (
    <div className="banner__text"> {props.text} </div>
  ) : (
    ""
  );

  const title = props.title ? (
    <h2 className="title title--large">
      {props.title.map((titleElement, index) => (
        <span key={index} className="banner__title-element">
          {titleElement}
        </span>
      ))}
    </h2>
  ) : (
    ""
  );

  const targetClass = props.forPage ? `banner--${props.forPage}` : "";
  const classes = `banner ${targetClass}`;

  let hasShapes = false;
  if (
    props.forPage &&
    (props.forPage === "about" || props.forPage === "organizations")
  ) {
    hasShapes = true;
  }

  const bannerShapes = hasShapes
    ? [
        <Shape key="1" wave className="banner__wave" />,
        <Shape key="2" cube className="banner__cube" />,
        <Shape key="3" waveLarge className="banner__wave-large" />
      ]
    : "";

  return (
    <article className={classes}>
      <div className="banner__image-wrapper">
        <MediaQuery maxWidth={767}>
          <Img
            resolutions={props.imageMobile}
            className="banner__image"
            alt={title}
          />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <Img fluid={props.image} className="banner__image" alt={title} />
        </MediaQuery>
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
