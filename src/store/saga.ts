import { REHYDRATE } from "redux-persist";
import { all, take } from "redux-saga/effects";
import { categorySaga } from "views/category/store/saga";
import { layoutSaga } from "views/layout/store/saga";
import { mainPageSaga } from "views/main/store/saga";
import { productPageSaga } from "views/product/store/saga";
import { headerSaga } from "components/layout/header/store/saga";

export default function* rootSaga() {
  yield take(REHYDRATE);
  yield all([categorySaga(), layoutSaga(), mainPageSaga(), productPageSaga(), headerSaga()]);
}
