import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute(props) {
  const { component: Component, ...rest } = props;

  const auth = useSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={props => {
        return auth.authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        );
      }}
    />
  );
}

export default ProtectedRoute;
