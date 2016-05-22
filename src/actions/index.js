import { TOGGLE_MENU, TOGGLE_GRID, GET_PLAYERS, GET_PLAYERS_ERROR, GET_PLAYER_DATA, FETCHING_PLAYER } from './types'
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

// const UllibolPlayerDataCall = (dispatch, url) => {
//   axios.get(url)
//     .then(response => {
//       const data = response.data
//       console.log('data from the inside', data)
//       return dispatch({ type: GET_PLAYER_DATA, playerData: data })
//     })
//     .catch(error => dispatch({ type: GET_PLAYERS_ERROR, error }))
// }

export function getPlayerData (player) {
  const request = axios.get('http://demo7284574.mockable.io/getplayer')
  return function (dispatch) {
    request.then(({data}) => {
      dispatch({ type: GET_PLAYER_DATA, playerData: data })
    })
  }
}

// export function fetchPlayer (player) {
//   return function (dispatch) {
//     console.log('fetchPlayer was hit with ', player) // 1
//     dispatch({ type: FETCHING_PLAYER, playerData: 'fetching' })
//     console.log('dispatched an action from fetchPlayer') // 2
//     // getPlayerData(player) // 3
//     return axios.get('http://demo7284574.mockable.io/getplayer')
//
//
//   }
// }
