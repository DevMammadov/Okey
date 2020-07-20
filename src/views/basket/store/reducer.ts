import { handleActions } from "redux-actions";
import { actionAsync } from "./action";

export interface IBasketState {
  loading: boolean;
}

const initialState: IBasketState = {
  loading: false,
};

export default handleActions(
  {
    [actionAsync.started]: (state) => ({ ...state, loading: true }),
    [actionAsync.failed]: (state) => ({ ...state, loading: false }),
    [actionAsync.success]: (state, action: any) => ({ ...state, loading: false }),
  },
  initialState
);
