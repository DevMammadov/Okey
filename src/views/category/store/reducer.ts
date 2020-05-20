import { handleActions } from "redux-actions";
import { getProductsAsync, getFiltersAsync, toggleCheckedList } from "./action";
import { IFilterField, IProduct } from "../types";

export interface ICategoryState {
  products: IProduct[];
  filterFields: IFilterField[];
  loading: boolean;
}

const initialState: ICategoryState = {
  products: [],
  filterFields: [],
  loading: false,
};

export default handleActions(
  {
    [getProductsAsync.started]: (state) => ({ ...state, loading: true }),
    [getProductsAsync.failed]: (state) => ({ ...state, loading: false }),
    [getProductsAsync.success]: (state, action) => ({
      ...state,
      products: action.payload as any,
      loading: false,
    }),
    [getFiltersAsync.started]: (state) => ({ ...state, loading: true }),
    [getFiltersAsync.failed]: (state) => ({ ...state, loading: false }),
    [getFiltersAsync.success]: (state, action) => ({
      ...state,
      filterFields: action.payload as any,
      loading: false,
    }),
    [toggleCheckedList]: (state, action) => ({
      ...state,
      filterFields: action.payload as any,
      loading: false,
    }),
  },
  initialState
);
