import { GET_PLAYERS, GET_PLAYERS_ERROR } from '../actions/types'

const UserInteractionsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      // console.log('TOGGLE_MENU: ', {...state, toggle: action.toggle}) use this as refrence
      return { ...state, allfootballersData: action.allfootballersData }
    case GET_PLAYERS_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}

export default UserInteractionsReducer
