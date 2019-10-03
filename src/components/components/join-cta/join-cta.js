import "./join-cta.scss";

import React, { memo } from "react";
import Img from "gatsby-image";

import { BACKEND_URL } from "./../../../settings";
import Shape from "./../shape/shape";

/**
 * Join the network CTA.
 * Appears at /about-us and /members.
 * Props contain image and variant classes.
 *
 * @param props
 */
const JoinCta = props => {
  const baseClass = "join-cta";
  // handle component classes. Add the variations found in props.
  const classString = `${baseClass} ${props.tall ? baseClass + "--tall" : ""} ${
    props.className
  }`;
  return (
    <a
      href={`${BACKEND_URL}/oidc/login`}
      target="_blank"
      rel="noopener noreferrer"
      className={classString}
    >
      <Img
        fluid={props.imageJoinCta.childImageSharp.fluid}
        className="join-cta__image"
      />
      <div className="join-cta__text">
        <span className="join-cta__text-large">Join</span>
        <span className="join-cta__text-small">the</span>
        <span className="join-cta__text-medium">network</span>
        <Shape waveLarge sunnyYellow className="join-cta__shape" />
      </div>
    </a>
  );
};

export default memo(JoinCta);
