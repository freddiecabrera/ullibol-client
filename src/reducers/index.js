import { combineReducers } from 'redux'
import HelloReducer from './HelloReducer.js'
const rootReducer = combineReducers({
  greeting: HelloReducer
})

export default rootReducer
