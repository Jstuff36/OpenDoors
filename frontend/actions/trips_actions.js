import * as TripsUtil from '../util/trips_api_util';

export const RECEIVE_TRIPS = 'RECEIVE_TRIPS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveTrips = trips => ({
  type: RECEIVE_TRIPS,
  trips
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const allTrips = (id) => dispatch => (
  TripsUtil.tripsHostingsByUser(id).then(response => (
    dispatch(receiveTrips(response)),
    dispatch(clearErrors())),
    err => dispatch(receiveErrors(err))
  )
);

export const newTrip = (trip) => dispatch => (
  TripsUtil.newTrip(trip).then( response => (
    dispatch(clearErrors()),
    err => dispatch(receiveErrors(err))
  ))
);
