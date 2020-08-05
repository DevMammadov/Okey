import groupApi from "api/group.api";
import { bindAsyncActions } from "helpers/bindAsyncActions";
import { takeEvery } from "redux-saga/effects";
import { groupPageActions } from "./action";

export function* groupPageSaga() {
  yield takeEvery(
    groupPageActions.getGroupResponse,
    bindAsyncActions(groupPageActions.getGroupResponseAsync)(groupApi.getGroupResponse)
  );
}
