import merge from 'lodash/merge';

import {
  RECEIVE_TRIPS,
  RECEIVE_TRIP_ERRORS,
  CLEAR_TRIP_ERRORS,
  RECEIVE_SINGLE_TRIP,
  DELETE_TRIP
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
    case RECEIVE_TRIP_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_TRIP_ERRORS:
      return merge({}, state, { errors: []});
    case RECEIVE_SINGLE_TRIP:
      const trip = action.trip;
      console.log("hi");
      return merge({}, state, { trips: {[trip.id]: trip} });
    case DELETE_TRIP:
      const id = action.id;
      let oldState = merge({}, state);
      delete oldState.trips[id];
      return oldState;
    default:
      return state;
  }
};

export default TripsReducer;
