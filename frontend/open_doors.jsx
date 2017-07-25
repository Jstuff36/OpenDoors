//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import configureStore from './store/store';
import Root from './components/root';
//Testing
import * as utils from './util/session_api_util';
import * as listingUtils from './util/listing_api_util';
import * as tripsUtils from './util/trips_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //end testing
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

window.util = utils;
window.listingUtil = listingUtils;
window.tripsUtil = tripsUtils;
