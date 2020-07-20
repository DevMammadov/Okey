import { createActionFactory } from "helpers";

const factory = createActionFactory("HEADER");

export const toggleBasket = factory.create("ADD_TO_BASKET");
export const updateBasket = factory.create("UPDATE_BASKET");

export const headerActions = {
  toggleBasket,
  updateBasket,
};
