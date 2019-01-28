/*
  auth actions
  used to request login/logout from the auth-wrapper component.
*/

export const requestLogin = () => {
  return dispatch => {
    return dispatch({
      type: 'AUTH_LOGIN'
    });
  };
};

export const requestLogout = () => {
  return dispatch => {
    // TODO: comment in if they should indeed be removed
    // localStorage.removeItem('token');
    // localStorage.removeItem('gotrue.user');
    return dispatch({
      type: 'AUTH_LOGOUT'
    });
  };
};
