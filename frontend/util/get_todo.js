export const getTodos = (success) => {
    $.ajax({
      method: 'GET',
      url: '/api/todoitems',
      success
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
