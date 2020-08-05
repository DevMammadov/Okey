import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Main = lazy(() => import("views").then((module) => ({ default: module.Main })));
const Category = lazy(() => import("views").then((module) => ({ default: module.Category })));
const Product = lazy(() => import("views").then((module) => ({ default: module.Product })));
const Basket = lazy(() => import("views").then((module) => ({ default: module.Basket })));
const Group = lazy(() => import("views").then((module) => ({ default: module.Group })));

export default ({ category }: any) => (
  <Switch>
    <Route exact path="/basket" component={Basket} />
    <Route exact path="/:root(search)/:categ?/:search?/:page(\d+)?" component={Group} />
    <Route exact path="/:category/:page(\d+)?" component={Category} />
    <Route exact path="/:category/:product/:page(\d+)?" component={Product} />
    <Route exact path="/" render={() => <Main category={category} />} />
  </Switch>
);
