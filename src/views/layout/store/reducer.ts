import { handleActions } from "redux-actions";
import { getCategoryAsync } from "./action";
import { ICategoryList, ICategory } from "types";

export interface ILayoutState {
  categoryList: ICategoryList[];
  categories: ICategory[];
  loading: boolean;
}

const initialState: ILayoutState = {
  categoryList: [],
  categories: [],
  loading: false,
};

export default handleActions(
  {
    [getCategoryAsync.started]: (state) => ({ ...state, loading: true }),
    [getCategoryAsync.failed]: (state) => ({ ...state, loading: false }),
    [getCategoryAsync.success]: (state, action: any) => ({
      ...state,
      categoryList: action.payload as any,
      categories: action.payload?.reduce((acc: ICategory[], { categs }: any) => acc.concat(categs), []),
      loading: false,
    }),
  },
  initialState
);
