import { combineReducers } from 'redux'
import HeaderReducer from './HeaderReducer'
import AuthReducer from './AuthReducer'

const rootReducer = combineReducers({
  authenticate: HeaderReducer,
  auth: AuthReducer
})

export default rootReducer;
