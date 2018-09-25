import React from 'react';
import {Provider} from 'react-redux';
import { Helmet } from 'react-helmet';

// improt local modules
import Header from './../../components/header/header';
import SkipLink from './../../components/skip-link/skip-link';
import Footer from './../../components/footer/footer';
import store from './../../../store';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../../../gatsby-config';

// utils
import {link, metadata} from './../../../settings';

// Styles
import './../../base-styles/fonts/fonts.scss'
import './../../base-styles/base/normalize.scss'
import './layout-base.scss'

const Basic = ({children}) =>{
  return(

    <Provider store={store} >

      <div className="layout-base">
        <Helmet meta={metadata} link={link}>
          <title>{GatsbyConfig.siteMetadata.title}</title>
        </Helmet>
        <SkipLink></SkipLink>
        <div>
          <Header />
        </div>
        <div id="content">
          {children}
        </div>
        <footer>
          <Footer />
        </footer>

      </div>
    </Provider>
  );
};

export default Basic;
