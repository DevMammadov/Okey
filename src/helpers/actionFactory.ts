import { createAction, createActions } from "redux-actions";

export type AsyncAction = {
  started: any;
  failed: any;
  success: any;
};

export const createActionFactory = (namespace: string) => ({
  create: (type: string) => createAction(`${namespace}/${type}`) as any,
  createAsync: (prefix: string) =>
    createActions(
      {
        success: (payload) => payload,
        started: (payload) => payload,
        failed: (error) => error,
      },
      {
        prefix: `${namespace}/${prefix}`,
        namespace: ".",
      }
    ) as AsyncAction,
});
