export const login = (username, password) => {
  console.log('inside login');
  return (dispatch) => {
    // make the actual call
    return () => dispatch({
      action: 'USER_LOGIN',
      payload: {
        username: 'user01',
        firstName: 'User',
        lastName: '01',
        location: 'Planet Earth',
        githubLink: 'https://github.com',
        personalPage: 'https://duckduckgo.com',
        clubLeader: true
      }
    })
  }
};

export const logout = () => {
  return (dispatch) => {
    // make the actual call
  }
}

export const checkLogin = () => {
  return (dispatch) => {
    // make the actual call
  }
}

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_CHECK = 'USER_CHECK';
