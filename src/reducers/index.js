import { combineReducers } from 'redux'; // Leaving all of this here for Redux reference
import todoReducer from './todoReducer';

export default combineReducers({
  todos: todoReducer
})