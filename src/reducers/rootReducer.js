import { combineReducers } from 'redux'
import user from './user'
import points from './points'

const rootReducer = combineReducers({
  user,
  points
})

export default rootReducer
