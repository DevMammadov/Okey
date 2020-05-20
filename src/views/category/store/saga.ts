import categoryApi from "api/category.api";
import { bindAsyncActions } from "helpers/bindAsyncActions";
import { takeEvery } from "redux-saga/effects";
import { categoryActions } from "./action";

export function* categorySaga() {
  yield takeEvery(
    categoryActions.getProducts,
    bindAsyncActions(categoryActions.getProductsAsync)(categoryApi.getProducts)
  );

  yield takeEvery(
    categoryActions.getFilters,
    bindAsyncActions(categoryActions.getFiltersAsync)(categoryApi.getFilterFields)
  );
}
