import React from 'react';
import SignInFormContainer from './session_form/sign_in_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <h1>OpenDoors</h1>
    <Route path="/login" component={SignInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
