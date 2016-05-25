import { TOGGLE_MENU, TOGGLE_GRID,  } from '../actions/types'

const UserInteractionsReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      // console.log('TOGGLE_MENU: ', {...state, toggle: action.toggle}) use this as refrence
      return { ...state, toggle: action.toggle }
    case TOGGLE_GRID:
      return { ...state, toggleGridView: action.toggleGridView }
    default:
      return state
  }
}

export default UserInteractionsReducer
