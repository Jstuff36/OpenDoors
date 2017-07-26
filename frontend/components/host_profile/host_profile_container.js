import { connect } from 'react-redux';
import HostProfile from './host_profile';
import { logout } from '../../actions/session_actions';
import { newTrip } from '../../actions/trips_actions';
import {
  singleListing,
  clearErrors
} from '../../actions/listings_actions';

const mapStateToProps = ( state, { match } ) => {
  return {
  errors: state.trips.errors,
  currentListing: state.listings.listings[parseInt(match.params.id)],
  currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  newTrip: (trip) => dispatch(newTrip(trip)),
  fetchSingleListing: (id) => dispatch(singleListing(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostProfile);
