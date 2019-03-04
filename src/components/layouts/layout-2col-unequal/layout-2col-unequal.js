import "./../../base-styles/base/normalize.scss";
import "./layout-2col-unequal.scss";

import React, { memo } from "react";

/**
 * Layout with two not equal columns.
 * In order to take effect, the children have to accept `className`
 * prop as their own. e.g. <Component className=`${props.className} newClass />`
 *
 * Props might contain:
 *  {boolean} horizontalGutters: adds variant class that adds horizontal gutters
 *  {boolean} verticalGutters: adds variant class that adds vertical gutters
 *  {boolean} alwaysTwoCols: adds variant class that keeps the layout always two
 *  columns.
 *  {boolean} onTablet: adds variant class to make layout two columns on tablet.
 *  {boolean} secondNarrow: adds variant class so that the second column is the
 *  narrow one instead of the first.
 *  {boolean} inverse: adds variant class so that the display is inversed but
 *  with same dom structure.
 *  {String} className: classes added to the element
 *
 * @param props
 **/
const Layout2ColsUnequal = props => {
  const baseClass = "layout-2col-unequal";

  /**
   * Add the `layout-2col-unequal__col` class to every child. Required for the
   * layout to apply correctly.
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
  if (props.alwaysTwoCols) classes.push(`${baseClass}--always-2col`);
  if (props.onTablet) classes.push(`${baseClass}--two-columns-on-tablet`);
  if (props.secondNarrow) classes.push(`${baseClass}--second-is-narrow`);
  if (props.inverse) classes.push(`${baseClass}--inverse`);
  if (props.className) classes.push(props.className);

  const classString = classes.join(" ");

  return <div className={classString}>{children}</div>;
};

export default memo(Layout2ColsUnequal);
