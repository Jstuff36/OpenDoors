//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import configureStore from './store/store';
import Root from './components/root';
//Testing
import * as utils from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();
  //Testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

window.util = utils;
