/**
 * Modifies the user store for a confirmed login.
 **/
const initial = {};

const userReducer = (state = initial, action) => {
  switch (action.type) {
    /**
     * Modifies the user store for a confirmed login.
     **/
    case "USER_LOGIN": {
      let loggeInState = {
        ...state,
        user: {
          ...action.payload
        }
      };

      return loggeInState;
    }

    /**
     * Initializes the user store
     * Modifies the user store for a confirmed logout.
     **/
    case "USER_LOGOUT": {
      let loggedOutState = {
        ...state,
        user: undefined
      };

      return loggedOutState;
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
