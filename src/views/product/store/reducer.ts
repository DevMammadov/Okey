import { handleActions } from "redux-actions";
import { getProductAsync, getProductInfoAsync, getSimiliarAsync } from "./action";
import { ISingleProduct, IProducDetail } from "../types";
import { IProduct } from "views/category/types";

export interface IProductPageState {
  product: ISingleProduct;
  productInfo: IProducDetail;
  similiarProducts: IProduct[];
  loading: boolean;
}

const initialState: IProductPageState = {
  product: {} as any,
  productInfo: {} as any,
  similiarProducts: [],
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
    [getProductInfoAsync.started]: (state) => ({ ...state, loading: true }),
    [getProductInfoAsync.failed]: (state) => ({ ...state, productInfo: {} as any, loading: false }),
    [getProductInfoAsync.success]: (state, action: any) => ({
      ...state,
      productInfo: action.payload,
      loading: false,
    }),
    [getSimiliarAsync.started]: (state) => ({ ...state, loading: true }),
    [getSimiliarAsync.failed]: (state) => ({ ...state, similiarProducts: [] as any, loading: false }),
    [getSimiliarAsync.success]: (state, action: any) => ({
      ...state,
      similiarProducts: action.payload,
      loading: false,
    }),
  },
  initialState
);
