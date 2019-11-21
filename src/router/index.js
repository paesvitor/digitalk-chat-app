import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Signin from "../screens/Signin";
import NotFound from "../screens/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      {/* Not Found Fallback */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
