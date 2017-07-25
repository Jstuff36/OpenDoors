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
