import React from 'react';
import {Provider} from 'react-redux';
import { Helmet } from 'react-helmet';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import fetch from 'node-fetch';

// Import local modules.
// import LayoutContained from "./../layout-contained/layout-contained";
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

  const client = new ApolloClient({
    link: new HttpLink({uri: 'https://07rqzpwj55.lp.gql.zone/graphql', fetch: fetch}),
    cache: new InMemoryCache(),
  });

  return(

    <ApolloProvider client={client}>
      <Provider store={store} >
        <div>
          <Helmet meta={metadata} link={link}>
            <title>{GatsbyConfig.siteMetadata.title}</title>
          </Helmet>
          <SkipLink></SkipLink>
          <div>
            <Header />
          </div>
          <div id="content" className="layout-base">
            {children}
          </div>
          <footer>
            <Footer />
          </footer>

        </div>
      </Provider>
    </ApolloProvider>
  );
};

export default Basic;
