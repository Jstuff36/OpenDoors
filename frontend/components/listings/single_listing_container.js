import { connect } from 'react-redux';
import SingleListing from './single_listing';
import { logout } from '../../actions/session_actions';
import {
  singleListing,
  clearErrors
} from '../../actions/listings_actions';

const mapStateToProps = ( state, { match } ) => {
  debugger;
  let currentListing;
  listings.listings.forEach( (listing) => {
    if (listing.id === parseInt(match.params.id)) {
      currentListing = listing;
    }
  });
  return {
  currentListing: currentListing
};};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  singleListing: (id) => dispatch(SingleListing(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleListing);
