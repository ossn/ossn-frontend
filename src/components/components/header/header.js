// external modules
import React from 'react';

// local modules
import PreNavigation from './../../navigation/small-navigation';
import Navigation from './../../navigation/main-navigation';

// styles
import './header.scss';

const Header = (props) => {
  return (
    <div className="header">
      <PreNavigation />
      <Navigation />
    </div>
  )
};

export default Header;
