import "./image-box.scss";

import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";

/**
 * The news tiles.
 * Appears at home page.
 *
 * Possible props:
 *  {Array} resource: Contains the resource titleLargeTop, titleSmall,
 *  titleLargeBottom, link, image.
 *  {boolean} large: if it exists large variant class is added.
 *  {boolean} centered: if it exists centered variant class is added.
 *  {boolean} offset: if it exists offset variant class is added.
 *  {boolean} end: if it exists end variant class is added.
 *  {boolean} orange: if it exists orange variant class is added.
 *  {boolean} light: if it exists light variant class is added.
 *  {boolean} isInternalLink: if it exists internal link is created, else
 *  external.
 *
 * @param props
 */
export default props => {
  const baseClass = "image-box";

  const resource = props.resource[0];
  const titleLargeTop = resource.titleLargeTop ? (
    <span className="image-box__title-large image-box__title-large--top">
      {resource.titleLargeTop}
    </span>
  ) : (
    ""
  );
  const titleSmall = resource.titleSmall ? (
    <span className="image-box__title-small">{resource.titleSmall}</span>
  ) : (
    ""
  );
  const titleLargeBottom = resource.titleLargeBottom ? (
    <span className="image-box__title-large image-box__title-large--top">
      {resource.titleLargeBottom}
    </span>
  ) : (
    ""
  );
  const image = resource.image ? resource.image : "";

  /**
   * Handle component classes. Add the variations found in props.
   */
  let classes = [baseClass];
  if (props.large) classes.push(`${baseClass}--large`);
  if (props.centered) classes.push(`${baseClass}--centered`);
  if (props.offset) classes.push(`${baseClass}--offset`);
  if (props.end) classes.push(`${baseClass}--end`);
  if (props.orange) classes.push(`${baseClass}--orange`);
  if (props.light) classes.push(`${baseClass}--light`);
  if (props.className) classes.push(props.className);
  const classString = classes.join(" ");

  const content = (
    <div className={classString}>
      <div className="image-box__image">
        <Img fluid={image.src.childImageSharp.fluid} />
      </div>

      <div className="image-box__text">
        <h3 className="image-box__title">
          {titleLargeTop}
          {titleSmall}
          {titleLargeBottom}
        </h3>
      </div>
    </div>
  );

  /**
   * Uses flag for the link generation.
   */
  const url = resource.link;
  const isInternalLink = resource.internalLink;
  if (isInternalLink) {
    return (
      <Link to={url} className="image-box__link">
        {content}
      </Link>
    );
  } else {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="image-box__link"
      >
        {content}
      </a>
    );
  }
};
