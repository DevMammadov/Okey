import { RouterState, connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import category, { ICategoryState } from "views/category/store/reducer";
import layout, { ILayoutState } from "views/layout/store/reducer";

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    category,
  });

export interface IAppState {
  router: RouterState;
  category: ICategoryState;
  layout: ILayoutState;
}
