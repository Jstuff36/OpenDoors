

import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const UPDATE_USERS = 'UPDATE_USERS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(response => (
    dispatch(receiveCurrentUser(response)),
    dispatch(clearErrors())
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(response => (
    dispatch(receiveCurrentUser(response)),
    dispatch(clearErrors())
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then( () => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const updateUser = (user) => dispatch => (
  APIUtil.updateUser(user).then(response => (
    dispatch(receiveCurrentUser(response)),
    dispatch(clearErrors())
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
