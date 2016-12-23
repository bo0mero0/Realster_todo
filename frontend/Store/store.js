import { createStore } from 'redux';
import TodoReducer from '../reducer/todo_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    TodoReducer,
    preloadedState
  )
);

export default configureStore;
