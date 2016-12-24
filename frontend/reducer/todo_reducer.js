import merge from 'lodash/merge';
import { RECEIVE_TODOS } from '../actions/todo_actions';

const _defaultState = Object.freeze({
  todos: [],
});

const TodoReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      let receiveTodos = merge({}, state);
      receiveTodos.todo = action.todos;
      return receiveTodos;
    default:
    debugger
      return state;
  }
};

export default TodoReducer;
