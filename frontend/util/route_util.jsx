import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

const UserProtected = ({ component: Component, path, loggedIn, currentUser }) => (
  <Route path={path} render={(props) => {
    if (loggedIn) {
      if (currentUser.id === parseInt(props.match.params.id)) {
        return <Component {...props} />;
      } else {
        return <Redirect to={`/user/${currentUser.id}`} />;
      }
    } else {
      return <Redirect to="/login" />;
  }}} />
);

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
export const UserProtectedRoute = withRouter(connect(mapStateToProps, null)(UserProtected));
