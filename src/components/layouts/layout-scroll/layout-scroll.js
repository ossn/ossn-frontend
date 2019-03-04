import "./layout-scroll.scss";

import React, { memo } from "react";

const LayoutScroll = props => {
  const baseClass = "layout-scroll";

  // add the `layout-scroll__item` class to every child.
  const children = React.Children.map(props.children, child => {
    const className = `${
      child.props.className || "" ? child.props.className : ""
    } ${baseClass}__item`;
    const props = { ...child.props, className: className };
    const newChild = React.cloneElement(child, props);
    return newChild;
  });

  // Handle extra classes. Add the classes found in props.
  let classes = [baseClass];
  if (props.className) classes.push(props.className);
  if (props.stretchItems) classes.push(`${baseClass}--stretch-items`);

  const classString = classes.join(" ");

  return <div className={classString}>{children}</div>;
};

export default memo(LayoutScroll);
