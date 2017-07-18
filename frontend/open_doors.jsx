//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components

//Testing
import * as utils from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hi</h1>, root);
});

window.util = utils;
