import * as TripsUtil from '../util/trips_api_util';

export const RECEIVE_TRIPS = 'RECEIVE_TRIPS';
export const RECEIVE_TRIP_ERRORS = 'RECEIVE_TRIP_ERRORS';
export const CLEAR_TRIP_ERRORS = 'CLEAR_TRIP_ERRORS';
export const DELETE_TRIP = 'DELETE_TRIP';

export const receiveTrips = trips => ({
  type: RECEIVE_TRIPS,
  trips
});

export const receiveErrors = errors => ({
  type: RECEIVE_TRIP_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_TRIP_ERRORS
});

export const deleteTrip = (id) => ({
  type: DELETE_TRIP,
  id
});

export const updateTrip = (trips) => ({

});

export const allTrips = (id) => dispatch => (
  TripsUtil.tripsHostingsByUser(id).then(response => (
    dispatch(receiveTrips(response))),
    err => dispatch(receiveErrors(err))
  )
);

export const newTrip = (trip) => dispatch => (
  TripsUtil.newTrip(trip).then( response => {
      return dispatch(clearErrors());
    },
    err => {
      return dispatch(receiveErrors(err.responseJSON));
    })
);
