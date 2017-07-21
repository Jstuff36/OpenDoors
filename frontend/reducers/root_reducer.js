import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ListingsReducer from './listings_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  listings: ListingsReducer
});

export default RootReducer;
