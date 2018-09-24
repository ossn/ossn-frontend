import React from 'react';

// Styles
import './../../base-styles/base/normalize.scss'
import './layout-2col.scss'

const Layout2ColsUnequal = ({children}) =>{
  let classes = ['layout-3col'];
  if (this.props.horizontalGutters) extraClasses.push('layout-3col--with-horizontal-gutters');
  if (this.props.verticalGutters) extraClasses.push('layout-3col--with-vertical-gutters');
  if (this.props.noTabletBreak) extraClasses.push('layout-3col--no-tablet-break');
  if (this.props.onlyDesktop3) extraClasses.push('layout-3col--only-desktop-3');

  const classString = classes.join(" ")

  <div className={classString}>
  return(
      {children}
    </div>
  );
};

export default Layout2ColsUnequal;
