import * as ListingsUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_CURRENT_LISTING = 'RECEIVE_CURRENT_LISTING';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

export const receiveCurrentListing = currentListing => ({
  type :RECEIVE_CURRENT_LISTING,
  currentListing
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const allListings = (city) => dispatch => (
  ListingsUtil.listingByLocation(city).then(response => (
    dispatch(receiveListings(response)),
    dispatch(clearErrors())),
    err => dispatch(receiveErrors(err))
  )
);

export const singleListing = (id) => dispatch => (
  ListingsUtil.singleListing(id).then(response => (
    dispatch(receiveCurrentListing(response)),
    dispatch(clearErrors())),
    err => dispatch(receiveErrors(err))
  )
);
