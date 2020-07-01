import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Main = lazy(() => import("views").then((module) => ({ default: module.Main })));
const Category = lazy(() => import("views").then((module) => ({ default: module.Category })));
const Product = lazy(() => import("views").then((module) => ({ default: module.Product })));

export default ({ category }: any) => (
  <Switch>
    <Route exact path="/" render={() => <Main category={category} />} />
    <Route exact path="/:category/:subCategory(-[A-Za-z0-9-əöüğşçı]+)?/:page(\d+)?" component={Category} />
    <Route exact path="/:category/:subCategory(-[A-Za-z0-9-əöüğşçı]+)?/:product/:page(\d+)?" component={Product} />
  </Switch>
);
