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

export const updateTrip = (data) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/trips/${data.id}`,
    data: {
      trips: data
    }
  })
);

export const deleteTrip = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/trips/${id}`
  })
);
