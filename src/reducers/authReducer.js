// used by the auth provider to determine if the user request a logout
// and potentially a login.

// initializes the user store
const initial = {
  login: false,
  logout: false,
  requestLogin: false,
  requestLogout: false
};

const authReducer = (state = initial, action) => {
  switch (action.type) {
    // modifies the user store for a confirmed login
    case 'AUTH_LOGIN': {
      let loginState = {
        ...state,
        login: true,
        logout: false
      };

      return loginState;
    }

    case 'AUTH_LOGOUT': {
      let logoutState = {
        ...state,
        logout: true,
        login: false
      };
      return logoutState;
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
