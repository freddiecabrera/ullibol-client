import { TOGGLE_MENU, TOGGLE_GRID, GET_PLAYERS, GET_PLAYERS_ERROR, GET_PLAYER_DATA } from './types'
import axios from 'axios'
import { myMap } from '../HelperFunctions'
const ALL_FOOTBALLERS_ULLIBOL_URL = 'http://ullibolserver.herokuapp.com/allfootballers/allfootballers'
const PLAYER_DATA_ULLIBOL_URL = 'http://ullibolserver.herokuapp.com/footballers/'

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
  axios.get(ALL_FOOTBALLERS_ULLIBOL_URL)
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

const UllibolPlayerDataCall = (dispatch, url) => {
  axios.get(url)
    .then(response => {
      const data = response.data
      dispatch({ type: GET_PLAYER_DATA, playerData: data })
    })
    .catch(error => dispatch({ type: GET_PLAYERS_ERROR, error }))
}

export function getPlayerData (player) {
  const url = PLAYER_DATA_ULLIBOL_URL + player
  return function (dispatch) {
    return UllibolPlayerDataCall(dispatch, url)
  }
}
