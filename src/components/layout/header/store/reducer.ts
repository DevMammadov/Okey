import { handleActions } from "redux-actions";
import { toggleBasket, updateBasket, searchGoodAsync } from "./action";
import { IBasketProduct, ISearchResult } from "../types";

export interface IHeaderState {
  basket: IBasketProduct[];
  result: ISearchResult[];
  loading: boolean;
}

const initialState: IHeaderState = {
  basket: [],
  result: [],
  loading: false,
};

export default handleActions(
  {
    [searchGoodAsync.started]: (state) => ({ ...state, loading: true }),
    [searchGoodAsync.failed]: (state) => ({ ...state, loading: false }),
    [searchGoodAsync.success]: (state, action: any) => ({
      ...state,
      result: action.payload,
      loading: false,
    }),
    [toggleBasket]: (state, action: any) => {
      let product = state.basket.filter((p) => p.id === action.payload.id)[0];
      return {
        ...state,
        basket: product ? state.basket.filter((p) => p.id !== product.id) : [...state.basket, action.payload],
      };
    },
    [updateBasket]: (state, action: any) => {
      return {
        ...state,
        basket: action.payload,
      };
    },
  },
  initialState
);
