import {
  TOGGLE_MENU,
  TOGGLE_GRID,
  GET_PLAYERS,
  GET_PLAYERS_ERROR,
  GET_PLAYER_DATA,
  FETCHING_PLAYER,
  DATA_TYPE,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  SIGN_UP_USER
} from './types'

import axios from 'axios'
import { browserHistory } from 'react-router'
import { myMap } from '../HelperFunctions'
const ALL_FOOTBALLERS_ULLIBOL_URL = 'http://ullibolserver.herokuapp.com/allfootballers/allfootballers'
const PLAYER_DATA_ULLIBOL_URL = 'http://ullibolserver.herokuapp.com/footballers/'
const AUTH_URL = 'http://ullibolserver.herokuapp.com/'
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

export const signinUser = ({ email, password }) => {
  return function (dispatch) {
    axios.post(`${AUTH_URL}signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER })
        dispatch(authError(false))
        localStorage.setItem('token', response.data.token)
        browserHistory.push('/ballerviews')
      })
      .catch(() => {
        dispatch(authError(true))
      })
  }
}

const authError = error => ({
  type: AUTH_ERROR,
  error
})

export const signoutUser = () => {
  localStorage.removeItem('token')
  return { type: UNAUTH_USER }

}


export const signupUser = ({ email, password }) => {
  return function (dispatch) {
    axios.post(`${AUTH_URL}signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', response.data.token)
        browserHistory.push('/ballerviews')
      })
      .catch(response => {
        console.log('response', response.data.error)
        console.log('authError', AUTH_ERROR);
        dispatch({ type: AUTH_ERROR, error: response.data.error})
      })
  }
}
