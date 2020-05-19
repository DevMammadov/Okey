import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Main = lazy(() =>
  import("views").then((module) => ({ default: module.Main }))
);

const Category = lazy(() =>
  import("views").then((module) => ({ default: module.Category }))
);

export default () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/category/:category" component={Category} />
  </Switch>
);
