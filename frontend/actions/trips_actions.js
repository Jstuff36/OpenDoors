import * as TripsUtil from '../util/trips_api_util';

export const RECEIVE_TRIPS = 'RECEIVE_TRIPS';
export const RECEIVE_TRIP_ERRORS = 'RECEIVE_TRIP_ERRORS';
export const CLEAR_TRIP_ERRORS = 'CLEAR_TRIP_ERRORS';
export const RECEIVE_SINGLE_TRIP = 'RECEIVE_SINGLE_TRIP';
export const DELETE_TRIP = 'DELETE_TRIP';

export const receiveTrips = trips => ({
  type: RECEIVE_TRIPS,
  trips
});

export const receiveSingleTrip = trip => ({
  type: RECEIVE_SINGLE_TRIP,
  trip
});

export const deleteSingleTrip = (id) => ({
  type: DELETE_TRIP,
  id
});

export const receiveErrors = errors => ({
  type: RECEIVE_TRIP_ERRORS,
  errors
});

export const clearTripErrors = () => ({
  type: CLEAR_TRIP_ERRORS
});


export const updateTrip = (trip) => dispatch => (
  TripsUtil.updateTrip(trip).then(response => (
    dispatch(receiveSingleTrip(response))
  ))
);

export const deleteTrip = (id) => dispatch => (
  TripsUtil.deleteTrip(id).then(trip => (
    dispatch(deleteSingleTrip(trip.id))
  ))
);

export const allTrips = (id) => dispatch => (
  TripsUtil.tripsHostingsByUser(id).then(response => (
    dispatch(receiveTrips(response))),
    err => dispatch(receiveErrors(err))
  )
);

export const newTrip = (trip) => dispatch => (
  TripsUtil.newTrip(trip).then( response => {
      return dispatch(clearTripErrors());
    },
    err => {
      return dispatch(receiveErrors(err.responseJSON));
    })
);
