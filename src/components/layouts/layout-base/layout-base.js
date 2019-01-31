import "./../../base-styles/base/normalize.scss";
import "./../../base-styles/fonts/fonts.scss";
import "./layout-base.scss";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { from } from "apollo-link";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";

import { AUTH_HEADER, SESSION_ITEM } from "../../../shared/enums";
import GatsbyConfig from "./../../../../gatsby-config";
import { BACKEND_URL, link, metadata } from "./../../../settings";
import store from "./../../../store";
import Footer from "./../../components/footer/footer";
import Header from "./../../components/header/header";
import SkipLink from "./../../components/skip-link/skip-link";
import AuthWrapper from "./..//auth-wrapper/auth-wrapper";

// import LayoutContained from "./../layout-contained/layout-contained";
const authLink = setContext((_, req) => {
  // get the authentication token from local storage if it exists
  // eslint-disable-next-line no-undef
  const token = localStorage.getItem(SESSION_ITEM);
  // return the headers to the context so httpLink can read them
  if (token) {
    req.headers = {
      ...(req.headers || {}),
      [AUTH_HEADER]: token
      // Credentials: 'same-origin'
    };
  }
  return req;
});

const httpLink = new HttpLink({
  uri: `${BACKEND_URL}/query`,
  fetch
});

// Handle graphql errors
const errorHandling = onError(({ networkError, operation, forward }) => {
  if (networkError && networkError.message.includes("403")) {
    // remove token from local storage
    localStorage.removeItem(SESSION_ITEM);

    // Get current headers
    const headers = {
      ...operation.getContext().headers
    };
    // Delete previous auth header
    delete headers[AUTH_HEADER];

    // Set headers to the new opertion
    operation.setContext({ headers });

    // retry the request, returning the new observable
    return forward(operation);
  }
});

const Basic = ({ location, children }) => {
  const client = new ApolloClient({
    link: from([authLink, errorHandling, httpLink]),
    cache: new InMemoryCache()
  });

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <AuthWrapper location={location}>
            <div>
              <Helmet meta={metadata} link={link}>
                <title>{GatsbyConfig.siteMetadata.title}</title>
                <html lang="en" />
              </Helmet>
              <SkipLink />
              <div>
                <Header />
              </div>
              <div className="layout-base__wrapper">
                <div id="content" className="layout-base">
                  {children}
                </div>
                <footer className="layout-base__bottom">
                  <Footer />
                </footer>
              </div>
            </div>
          </AuthWrapper>
        </Provider>
      </ApolloProvider>
    </React.StrictMode>
  );
};
export default React.memo(Basic);
