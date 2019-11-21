import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Chat from "../screens/Chat";
import NotFound from "../screens/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/cadastrar" component={Signup} />
      <ProtectedRoute exact path="/chat" component={Chat} />
      {/* Not Found Fallback */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
