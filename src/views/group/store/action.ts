import { createActionFactory } from "helpers/actionFactory";

const factory = createActionFactory("GROUP");

export const getGroupResponse = factory.create("GET_GROUP_RESPONSE");
export const getGroupResponseAsync = factory.createAsync("GET_GROUP_RESPONSE_ASYNC");
export const setFilter = factory.create("SET_FILTER");

export const groupPageActions = {
  getGroupResponse,
  getGroupResponseAsync,
  setFilter,
};
