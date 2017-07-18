import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => {
  return {
    // loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  signup: user => dispatch(signup(user))
});

export default connect(
  mapDispatchToProps,
  mapDispatchToProps
)(SessionForm);
