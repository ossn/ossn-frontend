/**
 * In order a LayoutXcol to take effect, the chilren have to accept `className` prop
 * as their own. e.g. <Component className=`${props.className} newClass />`
 **/
// Styles
import "./../../base-styles/base/normalize.scss";
import "./layout-2col-unequal-with-3-elements.scss";

import React, { memo } from "react";

const Layout2ColUnequalWith3Elements = props => {
  const baseClass = "layout-2col-unequal-with-3-elements";

  // add the `Layout-2col-unequal-with-3-elements__col` class to every child.
  const children = React.Children.map(props.children, child => {
    const className = `${child.props.className || ""} ${baseClass}__col`;
    const props = { ...child.props, className: className };
    const newChild = React.cloneElement(child, props);
    return newChild;
  });

  // handle component classes. Add the variations found in props.
  let classes = [baseClass];
  if (props.horizontalGutters)
    classes.push(`${baseClass}--with-horizontal-gutters`);
  if (props.verticalGutters)
    classes.push(`${baseClass}--with-vertical-gutters`);
  if (props.className) classes.push(props.className);

  const classString = classes.join(" ");

  return <div className={classString}>{children}</div>;
};

export default memo(Layout2ColUnequalWith3Elements);
