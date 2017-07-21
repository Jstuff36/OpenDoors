import React from 'react';
import SignInFormContainer from './session_form/sign_in_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';
import ListingMapContainer from './listings/listing_map_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <AuthRoute path="/login" component={SignInFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <Route exact path="/" component={ListingMapContainer} />
  </div>
);

export default App;
