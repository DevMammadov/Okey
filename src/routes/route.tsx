import React, { Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { App } from "views/layout";
import { createBrowserHistory } from "history";
import { Spinner } from "components/shared";

const Routes = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
