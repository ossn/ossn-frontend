import React from 'react';

// Styles
import './../../base-styles/base/normalize.scss'
import './layout-3col.scss'

const Layout2ColsUnequal = (props) =>{

  const baseClass = 'layout-3col';

  const lala = React.Children.map(props.children, (child) => {
    const className = `${child.props.className} ${baseClass}__col`;
    const props = { ...child.props, className: className };
    const newChild = React.cloneElement(child, props);
    return newChild;
  });

  let classes = [baseClass];
  if (props.horizontalGutters) classes.push(`${baseClass}--with-horizontal-gutters`);
  if (props.verticalGutters) classes.push(`${baseClass}--with-vertical-gutters`);
  if (props.noTabletBreak) classes.push(`${baseClass}--no-tablet-break`);
  if (props.onlyDesktop3) classes.push(`${baseClass}--only-desktop-3`);

  const classString = classes.join(" ")
  console.log(classString);
  return(
  <div className={classString}>
      {lala}
    </div>
  );
};

export default Layout2ColsUnequal;
