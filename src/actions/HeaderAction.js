import { TOGGLE_MENU, CHANGE_AUTH } from './types'

// export const showMenu = () => ({ type: SHOW_MENU })
// export const hideMenu = () => ({ type: HIDE_MENU })

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}
