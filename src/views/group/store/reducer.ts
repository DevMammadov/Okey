import { handleActions } from "redux-actions";
import { getGroupResponseAsync, setFilter } from "./action";
import { IGroupResponse, IGroupFilter } from "../types";

export interface IGroupState {
  response: IGroupResponse;
  filter: IGroupFilter;
  loading: boolean;
}

const initialState: IGroupState = {
  filter: {
    categ: "all",
    cheapFirst: false,
    viewModeisApp: true,
    page: 1,
    offset: 10,
  },
  response: {} as any,
  loading: false,
};

export default handleActions(
  {
    [getGroupResponseAsync.started]: (state) => ({ ...state, loading: true }),
    [getGroupResponseAsync.failed]: (state) => ({ ...state, loading: false }),
    [getGroupResponseAsync.success]: (state, action: any) => ({
      ...state,
      response: action.payload,
      loading: false,
    }),
    [setFilter]: (state, action: any) => ({
      ...state,
      filter: action.payload,
    }),
  },
  initialState
);
