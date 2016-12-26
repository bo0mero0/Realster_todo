export const getTodos = (success, error) => {
    $.ajax({
      method: 'GET',
      url: '/api/todoitems',
      success,
      error
    });
  };


export const addTodo = (todo,success) => {
    $.ajax({
      method: 'POST',
      url: '/api/todoitems',
      data: todo,
      success
    });
  };
