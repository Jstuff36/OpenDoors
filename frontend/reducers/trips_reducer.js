import merge from 'lodash/merge';

import {
  RECEIVE_TRIPS,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/trips_actions';

const noTrips = Object.freeze({
  trips: {},
  errors: []
});

const TripsReducer = (state = noTrips, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRIPS:
      const trips = action.trips;
      return Object.assign({}, state, { trips });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_ERRORS:
      return merge({}, state, { errors: []});
    default:
      return state;
  }
};

export default TripsReducer;
