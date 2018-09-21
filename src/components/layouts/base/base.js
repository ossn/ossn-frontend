import React from 'react';
import {Provider} from 'react-redux';
import { Helmet } from 'react-helmet';

// improt local modules
import Navigation from './../../navigation/main-navigation';
import SecondaryNavigation from './../../navigation/small-navigation';
import FooterNavigation from './../../navigation/footer-navigation';
import store from './../../../store';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../../../gatsby-config';

// Styles
import '../../init.scss'

const Basic = ({children}) =>{
  return(

    <Provider store={store} >

      <div>
        <Helmet>
          <title>{GatsbyConfig.siteMetadata.title}</title>
        </Helmet>

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
      </div>
    </Provider>
  );
};

export default Basic;
