import { navigate } from "gatsby";
import gql from "graphql-tag";
import { parse } from "query-string";
import React from "react";
import { Query, withApollo } from "react-apollo";
import { connect } from "react-redux";

import { LAST_VISITED_URL, SESSION_ITEM } from "../../../shared/enums";
import {
  requestLogout,
  resetActionLogout
} from "./../../../actions/authActions";
import { actionLogin, actionLogout } from "./../../../actions/userActions";
import { BACKEND_URL } from "./../../../settings";
import store from "./../../../store";

/**
 * Wrapper component for the Apollo client and handles the authentication logic.
 * It is based the Provider pattern and uses redux for it's implementation.
 *
 * Checks automatically for logged in users.
 * Listens the `authReducer` for the logout event.
 */

/**
 * Login button.
 *
 * @param {string} label
 * @param {string} className
 */
export const LoginLink = ({ label = "Login", className = "" }) => (
  <a
    className={className}
    href={`${BACKEND_URL}/oidc/login`}
    onClick={saveCurrentLocation}
  >
    {label}
  </a>
);

const logout = () => {
  store.dispatch(requestLogout());
};

/**
 * Logout link.
 *
 * @param {string} label
 * @param {string} className
 */
export const LogoutLink = ({ label = "Logout", className = "" }) => {
  return (
    <button className={className} onClick={logout}>
      {label}
    </button>
  );
};

/**
 * Stores the current url to the localStorage under the "last-visited" key.
 */
const saveCurrentLocation = () => {
  localStorage.setItem(
    LAST_VISITED_URL,
    window.location.pathname + window.location.search
  );
};

/**
 * Source: https://stackoverflow.com/questions/49750392/dispatch-redux-action-after-apollo-query-component-returns-result.
 */
class DoSomethingOnce extends React.PureComponent {
  componentDidMount() {
    this.props.action();
  }

  render() {
    return <>{this.props.children || null}</>;
  }
}

//TODO: Turn this into a functional component with hooks
/**
 * Authentication wrapper.
 */
class AuthWrapper extends React.PureComponent {
  componentDidMount() {
    const { token, ...rest } = parse(window.location.search) || {};

    if (token) {
      localStorage.setItem(SESSION_ITEM, token);
      const lastUrlBeforeLogin = window.localStorage.getItem(LAST_VISITED_URL);
      if (!rest.initial && lastUrlBeforeLogin) {
        localStorage.removeItem(LAST_VISITED_URL);
        navigate(`/${lastUrlBeforeLogin}`);
      } else {
        let param = "?";
        for (const [key, value] of Object.entries(rest)) {
          param += `${key}=${value}&`;
        }
        navigate(`${window.location.pathname}${param.slice(0, -1)}`);
      }
    }
  }

  componentDidUpdate(prevPros) {
    if (prevPros.auth.logout === false && this.props.auth.logout === true) {
      this.userlogout();
    }
  }

  userlogout = () => {
    this.props.client.mutate({ mutation: USER_LOGOUT }).then(({ data }) => {
      if ((data || {}).logout) {
        this.props.client.resetStore();
        store.dispatch(actionLogout());
        store.dispatch(resetActionLogout());
      } else {
        //TODO: Show error to user
        // eslint-disable-next-line no-console
        console.error("Failed to logout");
      }
    });
  };

  render() {
    return (
      <Query query={GET_SESSION} fetchPolicy="network-only">
        {({ data, loading, error }) => {
          if (loading) {
            return "";
          } else {
            if (!error && data.session && data.session.id) {
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
            return "";
          }
        }}
      </Query>
    );
  }
}

const mapAuthToProps = ({ auth, user }) => ({
  auth,
  user
});
export default connect(mapAuthToProps)(withApollo(AuthWrapper));

const GET_SESSION = gql`
  query session {
    session {
      userName
      id
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

const USER_LOGOUT = gql`
  mutation logout {
    logout
  }
`;
