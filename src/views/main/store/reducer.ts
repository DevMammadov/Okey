import { handleActions } from "redux-actions";
import { getMostViewedAsync } from "./action";
import { IProduct } from "views/category/types";

export interface IMainPageState {
  mostViewed: IProduct[];
  loading: boolean;
}

const initialState: IMainPageState = {
  mostViewed: [],
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
  },
  initialState
);
