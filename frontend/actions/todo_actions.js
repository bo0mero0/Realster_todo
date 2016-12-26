export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const CREATE_TODO = "CREATE_TODO";
export const FETCH_TODOS = "FETCH_TODOS";
export const CHECK_DONE = "CHECK_DONE";
export const DELETE_TODO = "DELETE_TODO";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const createTodo = todo => ({
  type: CREATE_TODO,
  todo
});

export const fetchTodos = () => ({
  type: FETCH_TODOS
});

export const checkDone = (id) => ({
  type: CHECK_DONE,
  id
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});
