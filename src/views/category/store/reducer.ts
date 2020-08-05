import { handleActions } from "redux-actions";
import {
  getProductsAsync,
  getFiltersAsync,
  toggleAttribute,
  togglePrice,
  clearSearchFilters,
  toggleViewMode,
} from "./action";
import { IFilterField, IProduct, ISearchFilter } from "../types";

export interface ICategoryState {
  products: IProduct[];
  filterFields: IFilterField;
  searchFilter: ISearchFilter;
  viewModeisApp: boolean;
  loading: boolean;
}

const initialState: ICategoryState = {
  products: [],
  filterFields: {} as any,
  searchFilter: {
    attributes: [],
    price: [0, 0],
  },
  viewModeisApp: true,
  loading: false,
};

export default handleActions(
  {
    [getProductsAsync.started]: (state) => ({ ...state, loading: true }),
    [getProductsAsync.failed]: (state) => ({ ...state, loading: false }),
    [getProductsAsync.success]: (state, action: any) => ({
      ...state,
      products: action.payload,
      loading: false,
    }),
    [getFiltersAsync.started]: (state) => ({ ...state, loading: true }),
    [getFiltersAsync.failed]: (state) => ({ ...state, loading: false }),
    [getFiltersAsync.success]: (state, action: any) => ({
      ...state,
      filterFields: action.payload,
      loading: false,
    }),
    [toggleAttribute]: (state, action: any) => ({
      ...state,
      searchFilter: {
        ...state.searchFilter,
        attributes: action.payload,
      },
    }),
    [togglePrice]: (state, action: any) => ({
      ...state,
      searchFilter: {
        ...state.searchFilter,
        price: action.payload,
      },
    }),
    [clearSearchFilters]: (state) => ({
      ...state,
      searchFilter: {} as any,
    }),
    [toggleViewMode]: (state, action: any) => ({
      ...state,
      viewModeisApp: action.payload,
    }),
  },
  initialState
);
