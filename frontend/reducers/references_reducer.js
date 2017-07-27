import merge from 'lodash/merge';

import {
  RECEIVE_REFERENCES,
  RECEIVE_SINGLE_REFERENCE,
  CLEAR_REFERENCES_ERRORS,
  RECEIVE_REFERENCES_ERRORS
} from '../actions/references_actions';

const noReferences = Object.freeze({
  references: {},
  errors: []
});

const ReferencesReducer = (state = noReferences, action) => {
  Object.freeze(state);
  const references = action.references;
  switch(action.type) {
    case RECEIVE_REFERENCES:
      return Object.assign({}, state, { references });
    case RECEIVE_SINGLE_REFERENCE:
      return merge({}, state, { references });
    case RECEIVE_REFERENCES_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_REFERENCES_ERRORS:
      return merge({}, state, {errors: []});
    default:
      return state;
  }
};

export default ReferencesReducer;
