import "./../../base-styles/base/normalize.scss";
import "./layout-2col-unequal-with-3-elements.scss";

import React, { memo } from "react";

/**
 * Responsive 2-column, not equal grid.
 * It has 3 elements. The second element on mobile is the one that becomes then
 * arrow right column on desktop. The first and the third seem like one column
 * at desktop.
 * In order to take effect, the children have to accept `className`
 * prop as their own. e.g. <Component className=`${props.className} newClass />`
 *
 * Props might contain:
 *  {boolean} horizontalGutters: adds variant class that adds horizontal gutters
 *  {boolean} verticalGutters: adds variant class that adds vertical gutters
 *  {String} className: classes added to the element
 *
 * @param props
 **/
const Layout2ColUnequalWith3Elements = props => {
  const baseClass = "layout-2col-unequal-with-3-elements";

  /**
   * Add the `layout-2col-unequal-with-3-element__col` class to every child.
   * Required for the layout to apply correctly.
   **/
  const children = React.Children.map(props.children, child => {
    const className = `${child.props.className || ""} ${baseClass}__col`;
    const props = { ...child.props, className: className };
    return React.cloneElement(child, props);
  });

  /**
   * Handle component classes. Add the variations found in props.
   **/
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
