import { createActionFactory } from "helpers/actionFactory";

const factory = createActionFactory("LAYOUT");

export const getCategory = factory.create("GET_CATEGORY");
export const getCategoryAsync = factory.createAsync("GET_CATEGORY_ASYNC");

export const layoutActions = {
  getCategory,
  getCategoryAsync,
};
