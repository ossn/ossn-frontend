import { SESSION_ITEM } from "../shared/enums";

/**
 * Supported user actions.
 * A user can login, logout, register, and check for an existing session.
 * All actions decide if they will use the login or the logout reducer action.
 */

/**
 * Handles the login request.
 */
export const actionLogin = userInfo => {
  return dispatch => {
    const user = {
      ...userInfo
    };

    return confirmLogin(dispatch, user);
  };
};

/**
 * Handles the logout request
 */
export const actionLogout = () => {
  return dispatch => {
    // eslint-disable-next-line no-undef
    localStorage.removeItem(SESSION_ITEM);
    // eslint-disable-next-line no-undef
    localStorage.removeItem("gotrue.user");
    return confirmLogout(dispatch);
  };
};

/**
 * Checks if there is an active user session.
 */
export const checkLogin = () => {
  return dispatch => {
    // make the actual call
    return confirmLogout(dispatch);
  };
};

/**
 * Handles a register request.
 */
export const register = user => {
  const newUser = {
    username: "user01",
    name: "User 01",
    location: "Planet Earth",
    githubLink: "https://github.com",
    personalPage: "https://duckduckgo.com",
    clubLeader: true
  };

  return dispatch => {
    // make the registration
    return confirmLogin(dispatch, newUser);
  };
};

/**
 * Dispatches the login data.
 */
const confirmLogin = (dispatch, user) => {
  return dispatch({
    type: "USER_LOGIN",
    payload: {
      ...user
    }
  });
};

/**
 * Dispatches the logout event.
 */
const confirmLogout = dispatch => {
  return dispatch({
    type: "USER_LOGOUT",
    payload: {}
  });
};
