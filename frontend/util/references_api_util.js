export const referencesForHost = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/references',
      data: {
        reference: {
          host_id: id
        }
      }
    }
  ));
};

export const newReference = (reference) => (
  $.ajax({
    method: 'POST',
    url: '/api/references',
    data: {
      reference: reference
    }
  })
);
