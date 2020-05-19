import layoutApi from "api/layout.api";
import { bindAsyncActions } from "helpers/bindAsyncActions";
import { takeEvery } from "redux-saga/effects";
import { layoutActions } from "./action";

export function* layoutSaga() {
  yield takeEvery(
    layoutActions.getCategory,
    bindAsyncActions(layoutActions.getCategoryAsync)(layoutApi.getCategory)
  );
}
