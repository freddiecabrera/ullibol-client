import { TOGGLE_MENU, TOGGLE_GRID, GET_PLAYERS, GET_PLAYERS_ERROR } from './types'
import axios from 'axios'
import { myMap } from '../HelperFunctions'
const ULLIBOL_URL = 'http://ullibolserver.herokuapp.com/allfootballers/allfootballers'

export function toggleMenu (toggle) {
  return {
    type: TOGGLE_MENU,
    toggle
  }
}

export function toggleGrid (toggleGridView) {
  return {
    type: TOGGLE_GRID,
    toggleGridView
  }
}

const UllibolPlayersCall = dispatch => {
  axios.get(ULLIBOL_URL)
    .then(response => {
      const data = response.data
      const newData = myMap(data, item => {
        return JSON.parse(item)
      })
      return dispatch({ type: GET_PLAYERS, allfootballersData: newData })
    })
    .catch(error => dispatch({ type: GET_PLAYERS_ERROR, error }))
}

export function getPlayers () {
  return function (dispatch) {
    UllibolPlayersCall(dispatch)
  }
}
