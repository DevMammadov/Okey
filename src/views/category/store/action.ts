import { createActionFactory } from "helpers/actionFactory";

const factory = createActionFactory("CATEGORY");

export const getProducts = factory.create("GET_PRODUCTS");
export const getProductsAsync = factory.createAsync("GET_PRODUCTS_ASYNC");

export const getFilteredProducts = factory.create("GET_FILTERED_PRODUCTS");
export const getFilteredProductsAsync = factory.createAsync("GET_FILTERED_PRODUCTS_ASYNC");

export const getFilters = factory.create("GET_FILTERS");
export const getFiltersAsync = factory.createAsync("GET_FILTERS_ASYNC");

export const toggleAttribute = factory.create("TOGGLE_ATTRIBUTE");
export const togglePrice = factory.create("TOGGLE_PRICE");
export const clearSearchFilters = factory.create("CLEAR_SEARCH_FILTERS");
export const toggleViewMode = factory.create("TOGGLE_VIEW_MODE");

export const categoryActions = {
  getProducts,
  getProductsAsync,
  getFilters,
  getFiltersAsync,
  togglePrice,
  toggleAttribute,
  clearSearchFilters,
  toggleViewMode,
};
