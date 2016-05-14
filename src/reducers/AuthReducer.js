const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_SET':
      return Object.assign({}, state, {
        user: action.data
      })
    default:
      return state
  }
}

export default AuthReducer
