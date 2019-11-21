import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import NotFound from "../screens/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/cadastrar" component={Signup} />
      {/* Not Found Fallback */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
