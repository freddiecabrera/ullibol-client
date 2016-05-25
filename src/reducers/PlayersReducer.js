import {
  GET_PLAYERS,
  GET_PLAYERS_ERROR,
  GET_PLAYER_DATA,
  FETCHING_PLAYER,
  DATA_TYPE
} from '../actions/types'

const PlayersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return { ...state, allfootballersData: action.allfootballersData }
    case GET_PLAYERS_ERROR:
      return { ...state, error: action.error }
    case GET_PLAYER_DATA:
      return { ...state, playerData: action.playerData }
    case FETCHING_PLAYER:
      return { ...state, fetching: action.fetching }
    case DATA_TYPE:
      return { ...state, dataType: action.getDataType}
    default:
      return state
  }
}

export default PlayersReducer
