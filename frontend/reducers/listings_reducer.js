import merge from 'lodash/merge';

import {
  RECEIVE_LISTINGS,
  RECEIVE_CURRENT_LISTING,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/listings_actions';

const noListings = Object.freeze({
  listings: {},
  currentListing: null,
  errors: []
});

const ListingsReducer = (state = noListings, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTINGS:
      const listings = action.listings;
      return merge({}, state, { listings });
    case RECEIVE_CURRENT_LISTING:
      const currentListing = action.currentListing;
      return merge({}, state, { currentListing });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_ERRORS:
      return merge({}, state, { errors: []});
    default:
      return state;
  }
};

export default ListingsReducer;
