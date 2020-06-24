import { handleActions } from "redux-actions";
import { getProductAsync } from "./action";
import { IProduct } from "views/category/types";

export interface IProductPageState {
  product: IProduct;
  loading: boolean;
}

const initialState: IProductPageState = {
  product: {} as any,
  loading: false,
};

export default handleActions(
  {
    [getProductAsync.started]: (state) => ({ ...state, loading: true }),
    [getProductAsync.failed]: (state) => ({ ...state, product: {} as any, loading: false }),
    [getProductAsync.success]: (state, action: any) => ({
      ...state,
      product: action.payload,
      loading: false,
    }),
  },
  initialState
);
