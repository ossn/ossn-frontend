/*
  auth actions
  used to request login/logout from the auth-wrapper component.
*/

export const requestLogin = () => {
  return dispatch => {
    return dispatch({
      type: "AUTH_LOGIN"
    });
  };
};

export const requestLogout = () => {
  return dispatch => {
    return dispatch({
      type: "AUTH_LOGOUT"
    });
  };
};

export const resetActionLogout = () => {
  return dispatch => {
    return dispatch({
      type: "AUTH_RESET_LOGOUT"
    });
  };
};
