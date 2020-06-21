import { RouterState, connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import category, { ICategoryState } from "views/category/store/reducer";
import layout, { ILayoutState } from "views/layout/store/reducer";
import mainPage, { IMainPageState } from "views/main/store/reducer";

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    mainPage,
    category,
  });

export interface IAppState {
  router: RouterState;
  category: ICategoryState;
  mainPage: IMainPageState;
  layout: ILayoutState;
}
