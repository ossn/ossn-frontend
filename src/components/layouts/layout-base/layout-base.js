import './../../base-styles/base/normalize.scss';
import './../../base-styles/fonts/fonts.scss';
import './layout-base.scss';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';

import GatsbyConfig from './../../../../gatsby-config';
import { BACKEND_URL, link, metadata } from './../../../settings';
import store from './../../../store';
import Footer from './../../components/footer/footer';
import Header from './../../components/header/header';
import SkipLink from './../../components/skip-link/skip-link';

// import LayoutContained from "./../layout-contained/layout-contained";
const authLink = setContext((r, req) => {
  // get the authentication token from local storage if it exists
  // eslint-disable-next-line no-undef
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  if (token) {
    req.headers = {
      ...(req.headers || {}),
      'X-Access-Token': token
      // Credentials: 'same-origin'
    };
  }
  return req;
});

const httpLink = new HttpLink({
  uri: `${BACKEND_URL}/query`,
  fetch: fetch
  // credentials: 'same-origin'
});

const Basic = ({ children }) => {
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
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
