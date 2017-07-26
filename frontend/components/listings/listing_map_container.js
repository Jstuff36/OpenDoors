import { connect } from 'react-redux';
import ListingMap from './listing_map';
import { logout } from '../../actions/session_actions';
import {
  allListings,
  singleListing,
  receiveCity,
  clearErrors
} from '../../actions/listings_actions';

const mapStateToProps = ( {session, listings } ) => ({
  listings: listings.listings,
  currentListing: listings.currentListing,
  currentUser: session.currentUser,
  currentCity: listings.currentCity,
  errors: listings.errors
});

const mapDispatchToProps = (dispatch) => ({
  allListings: (city) => dispatch(allListings(city)),
  singleListing: (id) => dispatch(singleListing(id)),
  receiveCity: (city) => dispatch(receiveCity(city)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingMap);
