import { connect } from 'react-redux';
import Todo from './todo';
import { fetchMessages, createMessage, receiveNotification} from '../../actions/message_actions';
import { fetchSubscribeChannels } from '../../actions/channel_actions';


const mapStateToProps = ( state ) => ({
  todo: state.todo
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMessages: (channelName) => dispatch(fetchMessages(channelName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
