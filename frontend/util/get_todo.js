export const getTodos = (success) => {
    $.ajax({
      method: 'GET',
      url: '/api/todos',
      success
    });
  };


export const addTodos = (todo,success) => {
    $.ajax({
      method: 'GET',
      url: '/api/todos',
      data: todo,
      success
    });
  };
