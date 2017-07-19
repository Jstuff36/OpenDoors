import React from 'react';
import SignInFormContainer from './session_form/sign_in_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';
import ListingMapContainer from './listings/listing_map_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route path="/login" component={SignInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
    <Route path="/listings" component={ListingMapContainer} />
  </div>
);

export default App;
