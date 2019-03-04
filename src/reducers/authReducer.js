/**
 * Used by the auth provider to determine if the user request a logout and
 * potentially a login.
 **/

/**
 * Initializes the user store.
 **/
const initial = {
  logout: false,
  requestLogout: false
};

const authReducer = (state = initial, action) => {
  switch (action.type) {
    /**
     * Modifies the user store for a confirmed login.
     **/
    case "AUTH_LOGIN": {
      let loginState = {
        ...state,
        logout: false,
        requestLogout: false
      };

      return loginState;
    }

    /**
     * Modifies the user store for a confirmed logout.
     **/
    case "AUTH_LOGOUT": {
      let logoutState = {
        ...state,
        logout: true,
        requestLogout: true,
        login: false
      };
      return logoutState;
    }

    /**
     * Modifies the user store for a reset logout.
     **/
    case "AUTH_RESET_LOGOUT": {
      let resetLogoutState = {
        ...state,
        logout: true,
        requestLogout: false
      };
      return resetLogoutState;
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
