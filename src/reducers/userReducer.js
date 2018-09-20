const initial = {
  requestSent: false,
  requestSuccess: false,
  requestError: false,
  loggedIn: false
}

const userReducer = (state=initial, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      let loggeInState = {
        ...state,
        loggedIn: true,
        user: {
          username: action.payload.username,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          location: action.payload.location,
          github: action.payload.github,
          page: action.payload.page,
          clubLeader: action.payload.leader
        }
      }

      return loggeInState;

    case 'USER_LOGOUT':
      let loggedOutState = {
        ...state,
        loggedIn: false,
        user: {}
      }

      return loggedOutState;

    return state;

    default:
      return state;
  }
}

export default userReducer;
