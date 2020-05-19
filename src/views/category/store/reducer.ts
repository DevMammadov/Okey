import { handleActions } from "redux-actions";
import { getProductsAsync } from "./action";

export interface ICategoryState {
  products: any[];
  loading: boolean;
}

const initialState: ICategoryState = {
  products: [],
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
  },
  initialState
);
