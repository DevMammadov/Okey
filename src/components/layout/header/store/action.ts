import { createActionFactory } from "helpers";

const factory = createActionFactory("HEADER");

export const toggleBasket = factory.create("ADD_TO_BASKET");
export const updateBasket = factory.create("UPDATE_BASKET");

export const searchGood = factory.create("SEARCH_GOOD");
export const searchGoodAsync = factory.createAsync("SEARCH_GOOD_ASYNC");

export const headerActions = {
  toggleBasket,
  updateBasket,
  searchGood,
  searchGoodAsync,
};
