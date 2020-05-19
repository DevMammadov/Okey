import { put } from "redux-saga/effects";
import { AsyncAction } from "./actionFactory";

interface IArgs {
  payload?: any;
}

export const bindAsyncActions = (asyncAction: AsyncAction) => (
  actionHandler: Function
) =>
  function* (
    args: IArgs | any = {},
    {
      successPayloadMapper = (p: any) => p,
      failurePayloadMapper = (e: any) => e,
      startedPayloadMapper = (p?: any) => p,
    } = {}
  ) {
    try {
      yield put(asyncAction.started(startedPayloadMapper()));
      const result = yield actionHandler(args.payload || args);
      yield put(asyncAction.success(successPayloadMapper(result)));
      return { result };
    } catch (error) {
      yield put(asyncAction.failed(failurePayloadMapper(error)));
      return { error };
    }
  };
