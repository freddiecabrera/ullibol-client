import { combineReducers } from 'redux'
import UserInteractionsReducer from './UserInteractionsReducer'
import PlayersReducer from './PlayersReducer'

const rootReducer = combineReducers({
  UserInteractionsReducer,
  PlayersReducer
})

export default rootReducer
