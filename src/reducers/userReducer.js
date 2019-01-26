// initializes the user store
const initial = {
  requestSent: false,
  requestSuccess: false,
  requestError: false,
  loggedIn: false
};

const userReducer = (state = initial, action) => {
  switch (action.type) {
    // modifies the user store for a confirmed login
    case 'USER_LOGIN': {
      let loggeInState = {
        ...state,
        user: {
          username: action.payload.username
        }
      };

      return loggeInState;
    }

    // modifies the user store for a confirmed logout
    case 'USER_LOGOUT': {
      let loggedOutState = {
        ...state,
        user: {}
      };

      return loggedOutState;
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
