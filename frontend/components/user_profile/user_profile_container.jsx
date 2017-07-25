import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ( state, { match } ) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)();
