import { createActionFactory } from "helpers/actionFactory";

const factory = createActionFactory("MAIN");

export const getMostViewed = factory.create("GET_MOST_VIEWED");
export const getMostViewedAsync = factory.createAsync("GET_MOST_VIEWED_ASYNC");

export const getServices = factory.create("GET_SERVICES");
export const getServicesAsync = factory.createAsync("GET_SERVICES_ASYNC");

export const mainPageActions = {
  getMostViewed,
  getMostViewedAsync,
  getServices,
  getServicesAsync,
};
