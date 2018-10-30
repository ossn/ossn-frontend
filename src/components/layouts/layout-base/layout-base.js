// Styles
import './../../base-styles/base/normalize.scss';
import './../../base-styles/fonts/fonts.scss';
import './layout-base.scss';

// utils
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import React, { memo } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';

// Import local modules
import GatsbyConfig from './../../../../gatsby-config';
import { link, metadata } from './../../../settings';
import store from './../../../store';
import Footer from './../../components/footer/footer';
import Header from './../../components/header/header';
import SkipLink from './../../components/skip-link/skip-link';
// import LayoutContained from "./../layout-contained/layout-contained";

// TODO: Remove and fid title another way.
const Basic = ({ children }) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://07rqzpwj55.lp.gql.zone/graphql',
      fetch: fetch,
    }),
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div>
          <Helmet meta={metadata} link={link}>
            <title>{GatsbyConfig.siteMetadata.title}</title>
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
  )
}

export default memo(Basic)
