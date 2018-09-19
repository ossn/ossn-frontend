const initial = {
  requestSent: false,
  requestSuccess: false,
  requestError: false,
}

const userReducer = (state=initial, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      let newState = {
        ...state,
        username: action.payload.username,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        location: action.payload.location,
        github: action.payload.github,
        page: action.payload.page,
        leadership: [...action.payload.clubs]
      }
    default: return state;
  }
}

export default userReducer;
