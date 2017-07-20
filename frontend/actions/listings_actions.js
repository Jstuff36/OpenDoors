import * as ListingsUtil from '../util/session_reducer';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});
