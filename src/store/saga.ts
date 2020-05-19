import { REHYDRATE } from "redux-persist";
import { all, take } from "redux-saga/effects";
import { categorySaga } from "views/category/store/saga";
import { layoutSaga } from "views/layout/store/saga";

export default function* rootSaga() {
  yield take(REHYDRATE);
  yield all([categorySaga(), layoutSaga()]);
}
