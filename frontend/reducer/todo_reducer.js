import merge from 'lodash/merge';
import { RECEIVE_TODO } from '../actions/todo_actions';

const _defaultState = Object.freeze({
  messages: [],
});

const TodoReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_TODO:
      let receiveTodos = merge({}, state);
      receiveTodos.todo = action.todos;
      return receiveTodos;
  }
};

export default TodoReducer;
