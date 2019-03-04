import React from "react";
import { connect } from "react-redux";

import {
  LoginLink,
  LogoutLink
} from "./../../layouts/auth-wrapper/auth-wrapper";

import { mapUserToProps } from "./../../../utils/redux-utils";

/**
 * The content for not authenticated users.
 *
 * @param props
 */
const NotAuthenticatedContent = props => {
  return <LoginLink />;
};

/**
 * The content for authenticated users.
 *
 * @param props
 */
const AuthenticatedContent = props => {
  return (
    <div>
      <p> Hello {props.userName}! </p>
      <LogoutLink />
    </div>
  );
};

/**
 * The content of the login page.
 * Moved here form the login page so it can be connected to store.
 *
 * @param props
 */
// TODO: find why it is not being updated after the userReducer is being changed
class LoginContent extends React.Component {
  render() {
    return (
      <div key={this.props.user.user ? "withUser" : "withoutUser"}>
        {this.props.user.user !== undefined ? (
          <div>
            <AuthenticatedContent userName={this.props.user.user.userName} />
          </div>
        ) : (
          <NotAuthenticatedContent />
        )}
      </div>
    );
  }
}

export default connect(mapUserToProps)(LoginContent);
