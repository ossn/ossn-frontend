import "./../../base-styles/base/normalize.scss";
import "./layout-3col.scss";

import React, { memo } from "react";

/**
 * Responsive 3-column grid.
 * In order a Layout3col to take effect, the children have to accept `className`
 * prop as their own. e.g. <Component className=`${props.className} newClass />`
 *
 * Props might contain:
 *  {boolean} horizontalGutters: adds variant class that adds horizontal gutters
 *  {boolean} verticalGutters: adds variant class that adds vertical gutters
 *  {boolean} early: adds variant class so the the layout that becomes two
 *  columns at mobile screen width.
 *  {String} className: classes added to the element
 *
 * @param props
 **/
const Layout2ColsUnequal = props => {
  const baseClass = "layout-3col";

  /**
   * Add the `layout-3col__col` class to every child.
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
  if (props.early) classes.push(`${baseClass}--early`);
  if (props.className) classes.push(props.className);

  const classString = classes.join(" ");
  return <div className={classString}>{children}</div>;
};

export default memo(Layout2ColsUnequal);
