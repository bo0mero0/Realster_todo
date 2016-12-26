import { connect } from 'react-redux';
import Todo from './todo';
import { checkDone, deleteTodo } from '../../actions/todo_actions';


const mapStateToProps = ( state ) => ({
  todos: state.todo.todos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  checkDone: (id) => dispatch(checkDone(id)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
