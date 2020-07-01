import mainApi from "api/main.api";
import { bindAsyncActions } from "helpers/bindAsyncActions";
import { takeEvery } from "redux-saga/effects";
import { mainPageActions } from "./action";

export function* mainPageSaga() {
  yield takeEvery(
    mainPageActions.getMostViewed,
    bindAsyncActions(mainPageActions.getMostViewedAsync)(mainApi.getMostViewed)
  );

  yield takeEvery(mainPageActions.getServices, bindAsyncActions(mainPageActions.getServicesAsync)(mainApi.getServices));
}
