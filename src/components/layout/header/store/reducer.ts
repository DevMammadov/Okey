import { handleActions } from "redux-actions";
import { toggleBasket, updateBasket } from "./action";
import { IBasketProduct } from "../types";

export interface IHeaderState {
  basket: IBasketProduct[];
  loading: boolean;
}

const initialState: IHeaderState = {
  basket: [],
  loading: false,
};

export default handleActions(
  {
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
