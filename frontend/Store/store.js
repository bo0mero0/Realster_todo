import { createStore, applyMiddleware, combineReducers } from 'redux';
import TodoReducer from '../reducer/todo_reducer';
import TodoMiddleware from '../middleware/todo_middleware';

const configureStore = (preloadedState = {}) => (
  createStore(
    combineReducers({ todo: TodoReducer}),
    preloadedState,
    applyMiddleware(TodoMiddleware)
  )
);

export default configureStore;
