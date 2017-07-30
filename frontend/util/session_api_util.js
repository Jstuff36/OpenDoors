export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {
      user: user
    }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user: user
    }
  })
);

export const updateUser = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    processData: false,
    contentType: false,
    dataType: 'json',
    url: `/api/users/${id}`,
    data: formData
  });
};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
