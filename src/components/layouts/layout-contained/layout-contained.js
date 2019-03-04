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
  const baseClass = "layout-contained";

  // Handle extra classes. Add the classes found in props.
  let classes = [baseClass];
  if (props.className) classes.push(props.className);

  const classString = classes.join(" ");

  return <div className={classString}>{props.children}</div>;
};

export default memo(LayoutContained);
