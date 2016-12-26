import React from 'react';
import ReactDOM from 'react-dom';
import Todo from '../todo/todo_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      done: "false"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTodoName = this.updateTodoName.bind(this);
    this.updateTodoDescription = this.updateTodoDescription.bind(this);
    this.capitalizeEachWord = this.capitalizeEachWord.bind(this);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  capitalizeEachWord(string) {
    return string.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let todos = this.props.todos;
    let tempState = this.state;
    tempState["name"] = this.capitalizeEachWord(tempState["name"]);
    let todosArray = Object.keys(todos);
    let lastTodo = todosArray[todosArray.length-1];
    todos[parseInt(lastTodo) + 1] = this.state;
    this.props.createTodo({todos: todos});
    this.setState({
      name: "",
      description: ""
    });
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
        <div className="footer">
          <div className="footer-logo"><img src="/assets/realster_logo.png"></img></div>
        </div>
      </div>
     );
  }
}

//
export default Main;
