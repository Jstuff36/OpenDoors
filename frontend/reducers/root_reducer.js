import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ListingsReducer from './listings_reducer';
import TripsReducer from './trips_reducer';
import ReferencesReducer from './references_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  listings: ListingsReducer,
  trips: TripsReducer,
  references: ReferencesReducer
});

export default RootReducer;
