import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

const mapStateToProps = ({ session }) => {
  return {
    // loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  signup: user => dispatch(signup(user)),
  custom_error: error => dispatch(receiveErrors(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
