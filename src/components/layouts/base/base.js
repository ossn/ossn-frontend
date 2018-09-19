import React from 'react';
import Navigation from './../../navigation/main-navigation';
import SecondaryNavigation from './../../navigation/small-navigation';
import FooterNavigation from './../../navigation/footer-navigation';

const Basic = ({children}) =>{
  return(
    <center>
      <br /><br /><br /><br /><br /><br />
      <div> <SecondaryNavigation /> </div>
      <br />
      <div>
        <Navigation />
        <br /><br /><br /><br />
       </div>

        {children}

      <br /><br /><br /><br /><br /><br />
      <div> <FooterNavigation /> </div>
      <div> This is the copyrights </div>
    </center>
  );
}

export default Basic;
