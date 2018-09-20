const initial = {
  requestSent: false,
  requestSuccess: false,
  requestError: false,
  loggedIn: false
}

const userReducer = (state=initial, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      let newState = {
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

      return newState;

    default:
      console.log(action);
      return state;
  }
}

export default userReducer;
