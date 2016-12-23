import { connect } from 'react-redux';
import Main from './main';
import { fetchTodos, createTodo } from '../../actions/todo_actions';


const mapStateToProps = ( state ) => ({
  todo: state.todo
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
