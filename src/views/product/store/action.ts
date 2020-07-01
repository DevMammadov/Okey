import { createActionFactory } from "helpers/actionFactory";

const factory = createActionFactory("PRODUCT");

export const getProduct = factory.create("GET_PRODUCT");
export const getProductAsync = factory.createAsync("GET_PRODUCT_ASYNC");

export const getProductInfo = factory.create("GET_PRODUCT_INFO");
export const getProductInfoAsync = factory.createAsync("GET_PRODUCT_INFO_ASYNC");

export const getSimiliar = factory.create("GET_SIMILIAR");
export const getSimiliarAsync = factory.createAsync("GET_SIMILIAR_ASYNC");

export const productPageActions = {
  getProduct,
  getProductAsync,
  getProductInfo,
  getProductInfoAsync,
  getSimiliar,
  getSimiliarAsync,
};
