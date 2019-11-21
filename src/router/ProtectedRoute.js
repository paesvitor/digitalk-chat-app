import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Authenticated from "../templates/authenticated";

function ProtectedRoute(props) {
  const { component: Component, ...rest } = props;

  const auth = useSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={props => {
        return auth.authenticated ? (
          <Authenticated>
            <Component {...props} />
          </Authenticated>
        ) : (
          <Redirect to={{ pathname: "/" }} />
        );
      }}
    />
  );
}

export default ProtectedRoute;
