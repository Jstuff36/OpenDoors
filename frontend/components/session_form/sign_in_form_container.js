import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SignInForm from './sign_in_form';

const mapStateToProps = ({ session }) => {
  return {
    // loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
