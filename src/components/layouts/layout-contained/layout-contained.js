import "./layout-contained.scss";

import React, { memo } from "react";

/**
 * Basic layout component.
 * Add containment and paddings from the sides of the page.
 *
 * Props might contain:
 *  {String} className: classes added to the element
 *
 * @param props
 **/

const LayoutContained = props => {
  return (
    <div
      className={`layout-contained ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

export default memo(LayoutContained);
