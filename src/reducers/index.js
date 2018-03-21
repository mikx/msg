import { combineReducers } from 'redux'

import user from './user'
import message from './message'

const rootReducer = combineReducers({
  user,
  message,
})

export default rootReducer
