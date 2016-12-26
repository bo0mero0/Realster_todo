import React from 'react';
import ReactDOM from 'react-dom';
import Todo from '../todo/todo_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTodoName = this.updateTodoName.bind(this);
    this.updateTodoDescription = this.updateTodoDescription.bind(this);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  handleSubmit(e) {
    e.preventDefault();
    let todos = this.props.todos;
    todos[Object.keys(todos).length + 1] = this.state;
    this.props.createTodo({todos: todos});
  }

  updateTodoName(e) {
    this.setState({
      name: e.currentTarget.value
    });
  }

  updateTodoDescription(e) {
    this.setState({
      description: e.currentTarget.value
    });
  }

  render () {

      return (
      <div>
        <div className="header">
          <div className="circle ">●</div>
          <div className="menu-icon">☰</div>
        </div>
        <div className="todos-container">
          <form className="task-form" onSubmit={this.handleSubmit}>
            <div className="text-input-container">
              <input type="text" className="name-input"
                placeholder="Type New Task"
                value={this.state.name}
                onChange={this.updateTodoName}></input>
              <div className="input-line"></div>
              <input type="text" className="description-input"
                placeholder="Type Task Description"
                value={this.state.description}
                onChange={this.updateTodoDescription}></input>
            </div>
            <input type="submit" className="submit" value="+" />
          </form>
          <div className="TodoList">
            <Todo/>
          </div>
        </div>
      </div>
     );
  }
}

//
export default Main;
