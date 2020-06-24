import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { ICategory } from "types";

const Main = lazy(() => import("views").then((module) => ({ default: module.Main })));

const Category = lazy(() => import("views").then((module) => ({ default: module.Category })));

const Product = lazy(() => import("views").then((module) => ({ default: module.Product })));

export default ({ category }: any) => (
  <Switch>
    <Route exact path="/" render={() => <Main category={category} />} />
    <Route exact path="/:category/:page?" component={Category} />
    <Route exact path="/:category/:subCategory/:page?" component={Category} />
    <Route exact path="/:category/:p/:product/:page?" component={Product} />
    <Route exact path="/:category/:subCategory/:p/:product/:page?" component={Product} />
  </Switch>
);
