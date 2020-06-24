import { createActionFactory } from "helpers/actionFactory";

const factory = createActionFactory("PRODUCT");

export const getProduct = factory.create("GET_PRODUCT");
export const getProductAsync = factory.createAsync("GET_PRODUCT_ASYNC");

export const productPageActions = {
  getProduct,
  getProductAsync,
};
