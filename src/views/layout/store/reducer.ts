import { handleActions } from "redux-actions";
import { getCategoryAsync } from "./action";
import { ICategory } from "types";

export interface ILayoutState {
  category: ICategory[];
  loading: boolean;
}

const initialState: ILayoutState = {
  category: [],
  loading: false,
};

export default handleActions(
  {
    [getCategoryAsync.started]: (state) => ({ ...state, loading: true }),
    [getCategoryAsync.failed]: (state) => ({ ...state, loading: false }),
    [getCategoryAsync.success]: (state, action) => ({
      ...state,
      category: action.payload as any,
      loading: false,
    }),
  },
  initialState
);
