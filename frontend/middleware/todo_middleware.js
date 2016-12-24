import {
  createTodo,
  fetchTodos,
  receiveTodos,
  CREATE_TODO,
  FETCH_TODOS
} from '../actions/todo_actions';

import {
  addTodo,
  getTodos
} from '../util/get_todo';

export default ({getState, dispatch}) => next => action => {
  const successCreateTodoCallback = todo => dispatch(fetchTodos(todo));
  const successReceiveTodoCallback = todo => dispatch(receiveTodos(todo));

  switch (action.type) {
    case CREATE_TODO:
      addTodo(action.todo, successCreateTodoCallback);
      return next(action);
    case FETCH_TODOS:
      getTodos(successReceiveTodoCallback);
      return next(action);
    default:
      return next(action);
  }
};
