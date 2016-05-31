import {
  TOGGLE_MENU,
  TOGGLE_GRID,
  GET_PLAYERS,
  GET_PLAYERS_ERROR,
  GET_PLAYER_DATA,
  FETCHING_PLAYER,
  DATA_TYPE
} from './types'

import axios from 'axios'
import { myMap } from '../HelperFunctions'
const ALL_FOOTBALLERS_ULLIBOL_URL = 'http://ullibolserver.herokuapp.com/allfootballers/allfootballers'
const PLAYER_DATA_ULLIBOL_URL = 'http://ullibolserver.herokuapp.com/footballers/'

// Toggle Menu
export function toggleMenu (toggle) {
  return {
    type: TOGGLE_MENU,
    toggle
  }
}

// Toggle Grid
export function toggleGrid (toggleGridView) {
  return {
    type: TOGGLE_GRID,
    toggleGridView
  }
}

// Get all players
const UllibolPlayersCall = dispatch => {
  axios.get(ALL_FOOTBALLERS_ULLIBOL_URL)
    .then(response => {
      const data = response.data
      const newData = myMap(data, item => {
        return JSON.parse(item)
      })
      dispatch({ type: FETCHING_PLAYER, fetching: false })
      return dispatch({ type: GET_PLAYERS, allfootballersData: newData })
    })
    .catch(error => dispatch({ type: GET_PLAYERS_ERROR, error }))
}

export function getPlayers () {
  return function (dispatch) {
    dispatch({ type: FETCHING_PLAYER, fetching: true })
    UllibolPlayersCall(dispatch)
  }
}

// Get single player data
const UllibolPlayerDataCall = (dispatch, url) => {
  axios.get(url)
    .then(response => {
      const data = response.data
      dispatch({ type: FETCHING_PLAYER, fetching: false })
      return dispatch({ type: GET_PLAYER_DATA, playerData: data })
    })
    .catch(error => dispatch({ type: GET_PLAYERS_ERROR, error }))
}

export function getPlayerData (player) {
  const url = 'http://demo7284574.mockable.io/getplayer'
  return function (dispatch) {
    dispatch({ type: FETCHING_PLAYER, fetching: true })
    UllibolPlayerDataCall(dispatch, url)
  }
}

// Check data type
export function getDataType (dataType) {
  return {
    type: DATA_TYPE,
    getDataType: dataType
  }
}
