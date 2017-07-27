import * as ReferencesUtil from '../util/references_api_util';

export const RECEIVE_REFERENCES = 'RECEIVE_REFERENCES';
export const RECEIVE_SINGLE_REFERENCE = 'RECEIVE_SINGLE_REFERENCE';
export const CLEAR_REFERENCES_ERRORS = 'CLEAR_REFERENCES_ERRORS';
export const RECEIVE_REFERENCES_ERRORS = 'RECEIVE_REFERENCES_ERRORS';

export const receieveReferences = references => ({
  type: RECEIVE_REFERENCES,
  references
});

export const receieveSingleReference = reference => ({
  type: RECEIVE_SINGLE_REFERENCE,
  reference
});

export const clearReferencesErrors = () => ({
  type: CLEAR_REFERENCES_ERRORS
});

export const receiveReferencesErrors = (errors) => ({
  type: RECEIVE_REFERENCES_ERRORS,
  errors
});

export const allReferences = (id) => dispatch => {
  return ReferencesUtil.referencesForHost(id).then( response => (
    dispatch(receieveReferences(response))
  ));
};

export const newReference = (reference) => dispatch => (
  ReferencesUtil.newReference(reference).then( response => {
    dispatch(clearReferencesErrors());
    dispatch(receieveSingleReference(response));
  },
    err => {
      dispatch(receiveReferencesErrors);
    }
  )
);
