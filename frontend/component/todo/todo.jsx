import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.renderTodos = this.renderTodos.bind(this);
  }

  renderTodos() {
      return Object.keys(this.props.todos).map((key) => {
        return (
          <div className="todo-container group" key={key}>
            <div className="check"><img src="/assets/green_check.png"></img></div>
            <ul className="todo">
              <li className="todo-name">{this.props.todos[key]["name"]}</li>
              <li className="todo-description">{this.props.todos[key]["description"]}</li>
            </ul>
            <div className="cross"><img src="/assets/x_mark.png"></img></div>
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
