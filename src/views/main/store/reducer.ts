import { handleActions } from "redux-actions";
import { getMostViewedAsync, getServicesAsync } from "./action";
import { IProduct } from "views/category/types";
import { IService } from "types";

export interface IMainPageState {
  mostViewed: IProduct[];
  services: IService[];
  loading: boolean;
}

const initialState: IMainPageState = {
  mostViewed: [],
  services: [],
  loading: false,
};

export default handleActions(
  {
    [getMostViewedAsync.started]: (state) => ({ ...state, loading: true }),
    [getMostViewedAsync.failed]: (state) => ({ ...state, loading: false }),
    [getMostViewedAsync.success]: (state, action: any) => ({
      ...state,
      mostViewed: action.payload,
      loading: false,
    }),
    [getServicesAsync.started]: (state) => ({ ...state, loading: true }),
    [getServicesAsync.failed]: (state) => ({ ...state, loading: false }),
    [getServicesAsync.success]: (state, action: any) => ({
      ...state,
      services: action.payload,
      loading: false,
    }),
  },
  initialState
);
