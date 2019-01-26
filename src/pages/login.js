// External modules.
import gql from 'graphql-tag';
import { parse } from 'query-string';
import React from 'react';
import { Query } from 'react-apollo';
import { Helmet } from 'react-helmet';

import GatsbyConfig from '../../gatsby-config';
import BasicLayout from '../components/layouts/layout-base/layout-base';
import LayoutContained from '../components/layouts/layout-contained/layout-contained';
import { BACKEND_URL } from '../settings';

import { actionLogin, actionLogout } from './../actions/userActions';
import store from './../store';

export default class login extends React.PureComponent {
  state = {
    user: undefined
  };

  componentDidMount = () => {
    let { token } = parse(this.props.location.search);
    if (token) {
      // eslint-disable-next-line no-undef
      localStorage.setItem('token', token);
      this.props.navigate('/login');
    }
  };

  render() {
    return (
      <BasicLayout>
        <Helmet>
          <title>
            {['Login', '|', GatsbyConfig.siteMetadata.title].join(' ')}
          </title>
        </Helmet>
        <LayoutContained>
          <Query query={query} fetchPolicy="network-only">
            {({ data, loading, client, error }) => {
              if (loading) {
                return (
                  <span className="navbar-text navbar-right">Loading...</span>
                );
              }

              if (!error && data.session.userName) {
                store.dispatch(actionLogin(data.session.userName));

                return (
                  <span>
                    <p className="navbar-text navbar-right">
                      <span>Hello {data.session.userName}</span> &nbsp;
                      <button
                        onClick={() => {
                          client
                            .mutate({ mutation: logout })
                            .then(({ data }) => {
                              if ((data || {}).logout) {
                                client.resetStore();
                                store.dispatch(actionLogout());
                              } else {
                                //TODO: Show error to user
                                // eslint-disable-next-line no-console
                                console.error('Failed to logout');
                              }
                            });
                        }}
                      >
                        Log out
                      </button>
                    </p>
                  </span>
                );
              }
              return (
                <a className="button" href={`${BACKEND_URL}/oidc/login`}>
                  Login
                </a>
              );
            }}
          </Query>
        </LayoutContained>
      </BasicLayout>
    );
  }
}

const query = gql`
  query session {
    session {
      userName
    }
  }
`;

const logout = gql`
  mutation logout {
    logout
  }
`;
