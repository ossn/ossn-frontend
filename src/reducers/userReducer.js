// initializes the user store
const initial = {};

const userReducer = (state = initial, action) => {
  switch (action.type) {
    // modifies the user store for a confirmed login
    case "USER_LOGIN": {
      let loggeInState = {
        ...state,
        user: {
          ...action.payload
        }
      };

      return loggeInState;
    }

    // modifies the user store for a confirmed logout
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
