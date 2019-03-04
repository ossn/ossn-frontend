/**
 * Auth actions.
 * Used to request logout or reset logout from the auth-wrapper component
 */

/**
 * Request logout.
 */
export const requestLogout = () => {
  return dispatch => {
    return dispatch({
      type: "AUTH_LOGOUT"
    });
  };
};

/**
 * Resets logout.
 */
export const resetActionLogout = () => {
  return dispatch => {
    return dispatch({
      type: "AUTH_RESET_LOGOUT"
    });
  };
};
