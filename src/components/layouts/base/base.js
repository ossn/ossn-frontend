import React from 'react';
import {Provider} from 'react-redux';
import { Helmet } from 'react-helmet';

// improt local modules
import Header from './../../components/header/header';
import Footer from './../../components/footer/footer';
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

        <div>
          <Header />
        </div>

        {children}

        <div>
          <Footer />
        </div>

      </div>
    </Provider>
  );
};

export default Basic;
