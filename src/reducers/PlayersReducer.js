import { GET_PLAYERS, GET_PLAYERS_ERROR, GET_PLAYER_DATA } from '../actions/types'

const PlayersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      // console.log('TOGGLE_MENU: ', {...state, toggle: action.toggle}) use this as refrence
      return { ...state, allfootballersData: action.allfootballersData }
    case GET_PLAYERS_ERROR:
      return { ...state, error: action.error }
    case GET_PLAYER_DATA:
      return { ...state, playerData: action.playerData }
    default:
      return state
  }
}

export default PlayersReducer
