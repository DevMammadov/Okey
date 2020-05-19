import { createActionFactory } from "helpers/actionFactory";

const factory = createActionFactory("CATEGORY");

export const getProducts = factory.create("GET_PRODUCTS");
export const getProductsAsync = factory.createAsync("GET_PRODUCTS_ASYNC");

export const categoryActions = {
  getProducts,
  getProductsAsync,
};
