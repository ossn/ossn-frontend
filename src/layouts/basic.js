import React from 'react';
import Navigation from './../containers/main-navigation';
import SecondaryNavigation from './../containers/small-navigation';
import FooterNavigation from './../containers/footer-navigation';

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
