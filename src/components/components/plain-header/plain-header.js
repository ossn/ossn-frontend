import "./plain-header.scss";

import React from "react";
import Shape from "./../shape/shape";

/**
 * Plain header.
 * Used for pages with simple header like plain-header and privacy policy.
 *
 * @props {string} title
 * @props {string} subtitle
 */
export const PlainHeader = ({ title, subtitle }) => {
  return (
    <div className="plain-header">
      <h1 className="plain-header__title title">{title}</h1>
      <h2 className="plain-header__subtitle highlighted-text">
        <div className="plain-header__subtitle-text">
          {subtitle}
          <span className="plain-header__header-shape plain-header__header-shape--square">
            <Shape square seafoamBlue />
          </span>
          <span className="plain-header__header-shape plain-header__header-shape--waves">
            <Shape waves darkSkyBlue />
          </span>
        </div>
      </h2>
    </div>
  );
};
