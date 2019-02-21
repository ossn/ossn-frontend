/*
  Supported user actions.
  a user can login, logout, register, and check for an existing sesison.
  all actions decide if they will use the login or the logout reducer action.
*/

// handle the login request
export const actionLogin = userInfo => {
  return dispatch => {
    const user = {
      ...userInfo
    };

    return confirmLogin(dispatch, user);
  };
};

// handles the logout request
export const actionLogout = () => {
  return dispatch => {
    // TODO: comment in if they should indeed be removed
    // eslint-disable-next-line no-undef
    localStorage.removeItem("token");
    // eslint-disable-next-line no-undef
    localStorage.removeItem("gotrue.user");
    return confirmLogout(dispatch);
  };
};

// checks if there is an active user session
export const checkLogin = () => {
  return dispatch => {
    // make the actual call
    return confirmLogout(dispatch);
  };
};

// handles a register request
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

// dispatches the login data
const confirmLogin = (dispatch, user) => {
  return dispatch({
    type: "USER_LOGIN",
    payload: {
      ...user
    }
  });
};

// dispatches the logout event
const confirmLogout = dispatch => {
  return dispatch({
    type: "USER_LOGOUT",
    payload: {}
  });
};
