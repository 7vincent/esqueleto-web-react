import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Routes";

import SignIn from "~/pages/SignIn";
import SignUp from "~/pages/SignUp";
import Dashdoard from "~/pages/Dashboard";
import Profile from "~/pages/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashdoard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
