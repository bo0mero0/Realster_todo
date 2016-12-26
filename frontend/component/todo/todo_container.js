import { connect } from 'react-redux';
import Todo from './todo';

const mapStateToProps = ( state ) => ({
  todos: state.todo.todos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
