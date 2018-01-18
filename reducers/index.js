import { combineReducers } from 'redux'
import list from './List'
import display from './Display'

const DisplayApp = combineReducers({
  list,
  display
})

export default DisplayApp
