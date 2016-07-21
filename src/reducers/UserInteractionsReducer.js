import { TOGGLE_MENU, TOGGLE_GRID, AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types'

const UserInteractionsReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, toggle: action.toggle }
    case TOGGLE_GRID:
      return { ...state, toggleGridView: action.toggleGridView }
    case AUTH_USER:
      return { ...state, error: '', authenticated: true }
    case UNAUTH_USER:
      return { ...state, authenticated: false }
    case AUTH_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}

export default UserInteractionsReducer
