import "./layout-scroll.scss";

import React, { memo } from "react";

/**
 * Layout scroll component.
 * Scroll horizontally on mobile, then become one column layout.
 * In order to take effect, the children have to accept `className`
 * prop as their own. e.g. <Component className=`${props.className} newClass />`
 *
 * Props might contain:
 *  {boolean} stretchItems: adds variant class that stretches items to 80% with
 *  constrains.
 *  {String} className: classes added to the element
 *
 * @param props
 **/
const LayoutScroll = props => {
  const baseClass = "layout-scroll";

  /**
   * Add the `layout-scroll__item` class to every child.
   * Required for the layout to apply correctly.
   **/
  const children = React.Children.map(props.children, child => {
    const className = `${
      child.props.className || "" ? child.props.className : ""
    } ${baseClass}__item`;
    const props = { ...child.props, className: className };
    return React.cloneElement(child, props);
  });

  /**
   * Handle component classes. Add the variations found in props.
   **/
  let classes = [baseClass];
  if (props.className) classes.push(props.className);
  if (props.stretchItems) classes.push(`${baseClass}--stretch-items`);

  const classString = classes.join(" ");

  return <div className={classString}>{children}</div>;
};

export default memo(LayoutScroll);
