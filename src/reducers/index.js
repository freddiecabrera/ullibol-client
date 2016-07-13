import { combineReducers } from 'redux'
import UserInteractionsReducer from './UserInteractionsReducer'
import PlayersReducer from './PlayersReducer'
import { reducer as form} from 'redux-form'

const rootReducer = combineReducers({
  form,
  UserInteractionsReducer,
  PlayersReducer
})

export default rootReducer
