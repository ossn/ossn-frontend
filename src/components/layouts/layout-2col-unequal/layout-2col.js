import React from 'react';

// Styles
import './../../base-styles/base/normalize.scss'
import './layout-2col.scss'

const Layout2ColsUnequal = ({children}) =>{
  let classes = ['layout-2col-unequal'];
  if (this.props.horizontalGutters) extraClasses.push('layout-2col-unequal--with-horizontal-gutters');
  if (this.props.verticalGutters) extraClasses.push('layout-2col-unequal--with-vertical-gutters');
  if (this.props.alwaysTwoCols) extraClasses.push('layout-2col-unequal--always-2col');
  if (this.props.onTablet) extraClasses.push('layout-2col-unequal--two-columns-on-tablet ');
  if (this.props.secondNarrow) extraClasses.push('layout-2col-unequal--second-is-narrow');
  if (this.props.inverse) extraClasses.push('layout-2col-unequal--inverse');

  const classString = classes.join(" ")

  <div className={classString}>
  return(
      {children}
    </div>
  );
};

export default Layout2ColsUnequal;
