import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.renderTodos = this.renderTodos.bind(this);
    this.checkDone = this.checkDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  checkDone(e) {
    this.props.checkDone(e.currentTarget.id);
  }

  deleteTodo(e) {
    this.props.deleteTodo(e.currentTarget.id);
  }

  renderTodos() {
    let todoArray = [];
    // Object.keys(this.props.todos).forEach((key) => {
    // const length = Object.keys(this.props.todos).length;
    // for (var key = length; key > 0; key--) {
    for ( var key in this.props.todos) {
        let cssClass;
        this.props.todos[key]["done"] === "false" ? cssClass = "todo-name" : cssClass = "todo-name done";
        todoArray.unshift(
          <div className="todo-container group" key={key}>
            <div className="check" id={key} onClick={this.checkDone}><img src="/assets/green_check.png"></img></div>
            <ul className="todo">
              <li className={cssClass}><span>{this.props.todos[key]["name"]}</span></li>
              <li className="todo-description">{this.props.todos[key]["description"]}</li>
            </ul>
            <div className="cross" id={key} onClick={this.deleteTodo}><img src="/assets/x_mark.png"></img></div>
          </div>
        );
    }
    return todoArray;
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
