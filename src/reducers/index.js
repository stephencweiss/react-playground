import {combineReducers} from 'redux';

import toDos from './toDoReducers'

const rootReducer = combineReducers({
  toDos,
})

export default rootReducer