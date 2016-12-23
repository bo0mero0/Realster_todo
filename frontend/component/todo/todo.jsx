import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.renderTodos = this.renderTodos.bind(this);
  }

  renderTodos() {
    this.props.todo.map((todo, index) => {
      return (
        <div>
          <div className="check"></div>
          <ul className="todo" key={index}>
            <li className="todo-name">{this.props.todo.name}</li>
            <li className="todo-description">{this.prop.todo.description}</li>
          </ul>
          <div className="cross"></div>
        </div>
      );
    });
  }



  render () {

      return (
       <div className="TodoList">
         {this.renderTodos()}
       </div>
     );
  }
}

//
export default Todo;
