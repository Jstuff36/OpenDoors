export const tripsHostingsByUser = (id) => (
  $.ajax({
    method: 'GET',
    url: '/api/trips',
    data: {
      trips: {
        id
      }
    }
  })
);

export const newTrip = (trip) => (
  $.ajax({
    method: 'POST',
    url: '/api/trips',
    data: {
      trips: trip
    }
  })
);

export const updateTrip = (trip) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/trips/${trip.id}`,
    data: {
      trips: trip
    }
  })
);

export const deleteTrip = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/trips/${id}`,
    data: {
      trips: id
    }
  })
);
