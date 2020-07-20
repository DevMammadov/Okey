import { createActionFactory } from "helpers";

const factory = createActionFactory("");

export const action = factory.create("");
export const actionAsync = factory.createAsync("");

export const BasketActions = {
  action,
  actionAsync,
};
