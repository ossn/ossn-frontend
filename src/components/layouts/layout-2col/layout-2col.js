import "./../../base-styles/base/normalize.scss";
import "./layout-2col.scss";

import React, { memo } from "react";

/**
 * Layout 2 column.
 * In order to take effect, the children have to accept `className`
 * prop as their own. e.g. <Component className=`${props.className} newClass />`
 *
 * Props might contain:
 *  {boolean} horizontalGutters: adds variant class that adds horizontal gutters
 *  {boolean} verticalGutters: adds variant class that adds vertical gutters
 *  {boolean} smallVerticalGutters: adds variant class that adds half gutters on
 *  top and bottom
 *  {boolean} groups: adds variant class since when the layout is used for
 *  groups of content and not only a single teaser per column, the vertical
 *  gutters need to be removed on mobile.
 *  {String} className: classes added to the element
 *
 * @param props
 **/
const Layout2Col = props => {
  const baseClass = "layout-2col";

  /**
   * Add the `layout-2col__col` class to every child. Required for the layout to
   * apply correctly.
   **/
  const children = React.Children.map(props.children, child => {
    const className = `${child.props.className || ""} ${baseClass}__col`;
    const childProps = { ...child.props, className: className };
    return React.cloneElement(child, childProps);
  });

  /**
   * Handle component classes. Add the variations found in props.
   **/
  let classes = [baseClass];
  if (props.horizontalGutters)
    classes.push(`${baseClass}--with-horizontal-gutters`);
  if (props.verticalGutters)
    classes.push(`${baseClass}--with-vertical-gutters`);
  if (props.smallVerticalGutters)
    classes.push(`${baseClass}--with-small-vertical-gutters`);
  if (props.groups) classes.push(`${baseClass}--groups`);
  if (props.className) classes.push(props.className);
  const classString = classes.join(" ");

  return <div className={classString}>{children}</div>;
};

export default memo(Layout2Col);
