import prodyctApi from "api/product.api";
import { bindAsyncActions } from "helpers/bindAsyncActions";
import { takeEvery } from "redux-saga/effects";
import { productPageActions } from "./action";

export function* productPageSaga() {
  yield takeEvery(
    productPageActions.getProduct,
    bindAsyncActions(productPageActions.getProductAsync)(prodyctApi.getProduct)
  );

  yield takeEvery(
    productPageActions.getProductInfo,
    bindAsyncActions(productPageActions.getProductInfoAsync)(prodyctApi.getProductInfo)
  );

  yield takeEvery(
    productPageActions.getSimiliar,
    bindAsyncActions(productPageActions.getSimiliarAsync)(prodyctApi.getSimiliarProducts)
  );
}
