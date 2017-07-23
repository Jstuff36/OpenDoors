import { connect } from 'react-redux';
import HostProfile from './host_profile';
import { logout } from '../../actions/session_actions';
import {
  singleListing,
  clearErrors
} from '../../actions/listings_actions';

const mapStateToProps = ( state, { match } ) => ({
  currentListing: state.listings.listings[parseInt(match.params.id)]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchSingleListing: (id) => dispatch(singleListing(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostProfile);
