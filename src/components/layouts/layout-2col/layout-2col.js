import React from 'react';

// Styles
import './../../base-styles/base/normalize.scss'
import './layout-2col.scss'

const Layout2Cols = ({children}) =>{
  let classes = ['layout-2col'];
  if (this.props.horizontalGutters) extraClasses.push('layout-2col--with-horizontal-gutters');
  if (this.props.verticalGutters) extraClasses.push('layout-2col--with-vertical-gutters');
  const classString = classes.join(" ")

  <div className={classString}>
  return(
      {children}
    </div>
  );
};

export default Layout2Cols;
