import { routerMiddleware } from "connected-react-router";
import _ from "lodash";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import createReducers from "./reducers";
import rootSaga from "./saga";

const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();

const persistConfig = {
  key: "okey",
  storage,
};

const loggerActionColors = {
  success: "green",
  failed: "red",
  started: "blue",
};

const logger = createLogger({
  collapsed: true,
  duration: true,
  colors: {
    // @ts-ignore
    title: (action: any) => loggerActionColors[action.type.split(".")[1]],
  },
});

const devMiddlewares = _.compact([logger]);
//let storeCopy: any;

export const createHistory = (history: any) => {
  const persistedReducer = persistReducer(
    persistConfig,
    createReducers(history)
  );

  const store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
        ...devMiddlewares
      )
    )
  );
  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);
  return { store, persistor };
};
