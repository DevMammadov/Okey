import { createActionFactory } from "helpers/actionFactory";

const factory = createActionFactory("CATEGORY");

export const getProducts = factory.create("GET_PRODUCTS");
export const getProductsAsync = factory.createAsync("GET_PRODUCTS_ASYNC");

export const getFilters = factory.create("GET_FILTERS");
export const getFiltersAsync = factory.createAsync("GET_FILTERS_ASYNC");

export const toggleCheckedList = factory.create("TOGGLE_CHECKED_LIST");

export const categoryActions = {
  getProducts,
  getProductsAsync,
  getFilters,
  getFiltersAsync,
};
