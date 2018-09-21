import React from 'react';
import PreNavigation from './../../navigation/small-navigation';
import Navigation from './../../navigation/main-navigation';

const Header = (props) => {
  return (
    <div>
      <PreNavigation />
      <Navigation />
    </div>
  )
};

export default Header;
