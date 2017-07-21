export const listingByLocation = city => (
  $.ajax({
    method: 'GET',
    url: '/api/listings',
    data: {
      user: {
        city
      }
    }
  })
);

export const singleListing = id => (
  $.ajax({
    method: 'GET',
    url: `/api/listings/${id}`,
    data: {
      user: {
        id
      }
    }
  })
);
