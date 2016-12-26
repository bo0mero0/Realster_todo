import merge from 'lodash/merge';
import { RECEIVE_TODOS, CHECK_DONE, DELETE_TODO } from '../actions/todo_actions';

const _defaultState = Object.freeze({
  todos: {},
});

const TodoReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      let receiveTodos = merge({}, state);
      receiveTodos.todos = action.todos;
      return receiveTodos;
    case CHECK_DONE:
      let newTodos = merge({}, state);
      if ( newTodos.todos[action.id]["done"] === "true" ) {
        newTodos.todos[action.id]["done"] = "false";
      } else {
        newTodos.todos[action.id]["done"] = "true";
      }
      return newTodos;
    case DELETE_TODO:
      let editedTodos = merge({}, state);
      delete editedTodos.todos[action.id];
      return editedTodos;
    default:
      return state;
  }
};

export default TodoReducer;
