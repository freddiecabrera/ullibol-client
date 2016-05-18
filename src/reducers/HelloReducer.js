import { HELLO } from '../actions/types'

const HelloReducer = (state = {}, action) => {
  switch (action.type) {
    case HELLO:
      return Object.assign({}, state, { greeting: 'Hello' })
  }
  return state
}

export default HelloReducer
