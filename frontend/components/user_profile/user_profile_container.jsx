import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserProfile from './user_profile';
import { allTrips, updateTrip, deleteTrip } from '../../actions/trips_actions';
import { updateUser } from '../../actions/session_actions';
import { allReferences } from '../../actions/references_actions';

const mapStateToProps = ( state, { match } ) => ({
  currentUser: state.session.currentUser,
  currentTrips: state.trips.trips
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchAllTrips: (id) => dispatch(allTrips(id)),
  updateUser: (user, id) => dispatch(updateUser(user, id)),
  approveTrip: (trip) => dispatch(updateTrip(trip)),
  deleteTrip: (id) => dispatch(deleteTrip(id)),
  fetchAllReferences: (id) => dispatch(allReferences(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
