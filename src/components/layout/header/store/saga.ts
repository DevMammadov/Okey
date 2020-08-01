import headerApi from "api/header.api";
import { bindAsyncActions } from "helpers/bindAsyncActions";
import { takeEvery } from "redux-saga/effects";
import { headerActions } from "./action";

export function* headerSaga() {
  yield takeEvery(headerActions.searchGood, bindAsyncActions(headerActions.searchGoodAsync)(headerApi.searchGood));
}
