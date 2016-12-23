export const RECEIVE_TODO = "RECEIVE_TODO";
export const CREATE_TODO = "CREATE_TODO";
export const FETCH_TODO = "FETCH_TODO";

export const receiveTodos = todos => ({
  type: RECEIVE_TODO,
  todos
});

export const createTodo = todo => ({
  type: CREATE_TODO,
  todo
});

export const fetchTodo = () => ({
  type: CREATE_TODO
});
