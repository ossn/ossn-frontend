/*
A wrapper component for the Apollo client and handles the authentication logic.
It is based the Provider pattern and uses redux for it's implementation.

- Checks automatically for logged in users
- listens the `authReducer` for the logout event.
*/

import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
// import { parse } from 'query-string';
import { actionLogin, actionLogout } from './../../../actions/userActions';
import {
  requestLogout,
  resetActionLogout
} from './../../../actions/authActions';

import { connect } from 'react-redux';

import store from './../../../store';
import { BACKEND_URL } from './../../../settings';

// a login button component.
export const LoginLink = props => {
  const classes = props.className || '';
  const label = props.label ? props.label : 'Login';

  return (
    <a className={classes} href={`${BACKEND_URL}/oidc/login`}>
      {label}
    </a>
  );
};

// a logout button component.
export const LogoutLink = props => {
  const classes = props.className || '';
  const label = props.label ? props.label : 'Logout';

  const logout = () => {
    store.dispatch(requestLogout());
  };

  return (
    <button
      className={classes}
      onClick={() => {
        logout();
      }}
    >
      {label}
    </button>
  );
};

// source
// eslint-ignore-next
// https://stackoverflow.com/questions/49750392/dispatch-redux-action-after-apollo-query-component-returns-result
class DoSomethingOnce extends React.PureComponent {
  componentDidMount() {
    this.props.action();
  }

  render() {
    return <>{this.props.children || null}</>;
  }
}

class AuthWrapper extends React.PureComponent {
  state = {
    user: undefined,
    loadingState: false,
    shouldLogout: false
  };

  componentDidUpdate(prevPros) {
    if (prevPros.auth.logout === false && this.props.auth.logout === true) {
      this.userlogout();
    }
  }

  // abstraction over the logic for the user logged in test.
  userIsLoggedIn = () => {
    // TODO: update me after connecting to store.
    return this.state.user !== undefined;
  };

  // placeholder.
  // That function will be updated by the graphQL query.
  // reason:
  // The logout has to have the `client` object in it's scope.
  userlogout = () => {};

  userQuery = () => {
    return (
      <Query query={query} fetchPolicy="network-only">
        {({ data, loading, client, error }) => {
          if (loading) {
            return <></>;
          } else {
            if (!error && data.session.userName) {
              this.userlogout = () => {
                client.mutate({ mutation: logout }).then(({ data }) => {
                  if ((data || {}).logout) {
                    client.resetStore();
                    store.dispatch(actionLogout());
                    store.dispatch(resetActionLogout());
                  } else {
                    //TODO: Show error to user
                    // eslint-disable-next-line no-console
                    console.error('Failed to logout');
                  }
                });
              };

              if (!this.props.user.user && !this.props.auth.logout) {
                return (
                  <DoSomethingOnce
                    action={() => {
                      store.dispatch(actionLogin(data.session));
                    }}
                  />
                );
              }
            }
            return <></>;
          }
        }}
      </Query>
    );
  };

  prepare = () => {
    this.userQuery();
  };

  // makes the login for the user.
  userlogin = () => {
    this.userQuery();
    // this.setState({ user: 'dpliakos', shouldLogout: false });
  };

  render() {
    return (
      <>
        {this.userQuery()}
        {this.props.children}
      </>
    );
  }
}

const mapAuthToProps = store => {
  return {
    auth: store.auth,
    user: store.user
  };
};
export default connect(mapAuthToProps)(AuthWrapper);

const query = gql`
  query session {
    session {
      userName
      name
      imageUrl
      receiveNewsletter
      description
      githubUrl
      personalUrl
      email
      clubs {
        name
        role
      }
    }
  }
`;

const logout = gql`
  mutation logout {
    logout
  }
`;
