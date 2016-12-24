export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const CREATE_TODO = "CREATE_TODO";
export const FETCH_TODOS = "FETCH_TODOS";

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
