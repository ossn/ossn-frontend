/**
 * In order a LayoutXcol to take effect, the chilren have to accept `className` prop
 * as their own. e.g. <Component className=`${props.className} newClass />`
 **/
// Styles
import './../../base-styles/base/normalize.scss';
import './layout-2col.scss';

import React, { memo } from 'react';

const Layout2Col = props => {
  const baseClass = 'layout-2col';

  // add the `Layout-2col__col` class to every child.
  const children = React.Children.map(props.children, child => {
    const className = `${
      child.props.className || '' ? child.props.className : ''
    } ${baseClass}__col`;
    const childProps = { ...child.props, className: className };
    const newChild = React.cloneElement(child, childProps);
    return newChild;
  });

  // handle component classes. Add the variations found in props.
  let classes = [baseClass];
  if (props.horizontalGutters)
    classes.push(`${baseClass}--with-horizontal-gutters`);
  if (props.verticalGutters)
    classes.push(`${baseClass}--with-vertical-gutters`);
  if (props.smallVerticalGutters)
    classes.push(`${baseClass}--with-small-vertical-gutters`);
  if (props.groups) classes.push(`${baseClass}--groups`);
  if (props.className) classes.push(props.className);
  const classString = classes.join(' ');

  return <div className={classString}>{children}</div>;
};

export default memo(Layout2Col);
