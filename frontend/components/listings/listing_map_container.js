import { connect } from 'react-redux';
import ListingMap from './listing_map';
import { logout } from '../../actions/session_actions';
import {
  allListings,
  singleListing,
  clearErrors
} from '../../actions/listings_actions';

const mapStateToProps = ( { listings } ) => ({
  listings: listings.listings,
  currentListing: listings.currentListing,
  errors: listings.errors
});

const mapDispatchToProps = (dispatch) => ({
  allListings: (city) => dispatch(allListings(city)),
  singleListing: (id) => dispatch(singleListing(id)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingMap);
