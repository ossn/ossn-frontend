import './../../base-styles/base/normalize.scss';
import './../../base-styles/fonts/fonts.scss';
import './layout-base.scss';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import fetch from 'node-fetch';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';

import GatsbyConfig from './../../../../gatsby-config';
import { link, metadata } from './../../../settings';
import store from './../../../store';
import Footer from './../../components/footer/footer';
import Header from './../../components/header/header';
import SkipLink from './../../components/skip-link/skip-link';

// import LayoutContained from "./../layout-contained/layout-contained";

const Basic = ({ children }) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://ossn-api.swaco.io/query',
      fetch: fetch
    }),
    cache: new InMemoryCache()
    // headers: {
    //   'Access-Control-Allow-Origin' : '*',
    //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    // }
  });

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <div>
            <Helmet meta={metadata} link={link}>
              <title>{GatsbyConfig.siteMetadata.title}</title>
              <html lang="en" />
            </Helmet>
            <SkipLink />
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
    </React.StrictMode>
  );
};
export default React.memo(Basic);
