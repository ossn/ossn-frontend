/*
In order a LayoutXcol to take effect, the chilren have to accept `className` prop
as their own. e.g. <Component className=`${props.className} newClass />`
*/

import React from 'react';

// Styles
import './../../base-styles/base/normalize.scss'
import './layout-2col.scss'


const Layout2Col = (props) => {

  const baseClass = 'layout-2col';

  const children = React.Children.map(props.children, (child) => {
    const className = `${child.props.className ? child.props.className : '' } ${baseClass}__col`;
    const props = { ...child.props, className: className };
    const newChild = React.cloneElement(child, props);
    return newChild;
  });

  let classes = [baseClass ];
  if (props.horizontalGutters) classes.push(`${baseClass}--with-horizontal-gutters`);
  if (props.verticalGutters) classes.push(`${baseClass}--with-vertical-gutters`);
  const classString = classes.join(" ")

  return (
    <div className={classString}>
      {children}
     </div>
  )
}

export default Layout2Col;
