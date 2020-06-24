import prodyctApi from "api/product.api";
import { bindAsyncActions } from "helpers/bindAsyncActions";
import { takeEvery } from "redux-saga/effects";
import { productPageActions } from "./action";

export function* mainPageSaga() {
  yield takeEvery(
    productPageActions.getProduct,
    bindAsyncActions(productPageActions.getProductAsync)(prodyctApi.getProduct)
  );
}
