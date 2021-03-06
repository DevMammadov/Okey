import { RouterState, connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import category, { ICategoryState } from "views/category/store/reducer";
import layout, { ILayoutState } from "views/layout/store/reducer";
import mainPage, { IMainPageState } from "views/main/store/reducer";
import header, { IHeaderState } from "components/layout/header/store/reducer";
import product, { IProductPageState } from "views/product/store/reducer";
import group, { IGroupState } from "views/group/store/reducer";

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    header,
    layout,
    mainPage,
    category,
    product,
    group,
  });

export interface IAppState {
  router: RouterState;
  category: ICategoryState;
  mainPage: IMainPageState;
  layout: ILayoutState;
  header: IHeaderState;
  product: IProductPageState;
  group: IGroupState;
}
