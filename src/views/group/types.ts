import { IGroup } from "types";
import { IProduct } from "views/category/types";

export interface IGroupResponse {
  categs: IGroup[];
  products: IProduct[];
  resultCount: number;
  productCount: number;
}

export interface IGroupFilter {
  categ: string;
  cheapFirst: boolean;
  viewModeisApp: boolean;
  page: number;
  offset: number;
}

// response types
export interface IGroupResponsePayload {
  categ: string;
  search: string;
  cheapFirst?: boolean;
  page?: number;
}
