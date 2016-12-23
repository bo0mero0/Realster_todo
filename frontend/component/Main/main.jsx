import React from 'react';
import ReactDOM from 'react-dom';
import Todo from '../todo/todo';
import receiveTodos from '../../actions/todo_actions';
import { getTodos, addTodo } from '../../util/get_todo.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoName: "",
      todoDescription: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTodoName = this.updateTodoName.bind(this);
    this.updateTodoDescription = this.updateTodoDescription.bind(this);
  }

  componentDidMount() {
    const successTodoCallback = todo => this.props.store.dispatch(receiveTodos(todo));
    getTodos(successTodoCallback);
  }

  handleSubmit() {
    const successTodoCallback = todo => this.props.store.dispatch(receiveTodos(todo));
    addTodo(this.state, successTodoCallback);
  }

  updateTodoName(e) {
    this.setState({
      todoName: e.currentTarget.value
    });
  }

  updateTodoDescription(e) {
    this.setState({
      todoDescription: e.currentarget.value
    });
  }

  render () {

      return (
      <div>
        <form>
          <input type="text" placeholder="Type New Task"></input>
          <input type="submit" value="+"/>
        </form>
        <div className="TodoList">
          <Todo todos={this.props.todoList}/>
        </div>
      </div>
     );
  }
}

//
export default Main;
