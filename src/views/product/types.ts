import { IAttribute } from "views/category/types";
import { IColor } from "types";

export interface ISingleProduct {
  id: number;
  name: string;
  view: number;
  like: number;
  badge: string;
  warranty: string;
  categoryId: number;
  colors: IColor[];
  attributes: IAttribute[];
}

export interface IProducDetail {
  price: number;
  discount: number;
  images: string[];
  selectedColor: IColor;
  atStock: boolean;
  atStore: boolean;
}

// response types
export interface IGetProduct {
  name: string;
  color?: IColor;
}
