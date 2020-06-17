export interface IChecked {
  brand: string;
  value: string;
}

export interface IValue {
  value: string;
  valueId: number;
  count: number;
}

export interface IFilterAttribute {
  attribute: string;
  attributeId: number;
  values: IValue[];
}

export interface IFilterField {
  price: number[];
  attributes: IFilterAttribute[];
}

export interface ICheckedAttribute {
  valueId: number;
  attributeId: number;
}

export interface ISearchFilter {
  price: number[];
  attributes: ICheckedAttribute[];
}

export interface IAttribute {
  name: string;
  value: string;
}

export interface IProduct {
  id: number;
  name: string;
  view: number;
  like: number;
  price: number;
  discount: number;
  enabled: boolean;
  badge: string;
  warranty: string;
  image: string;
  attributes: IAttribute[];
}

export interface IProductPayload {
  categId: number;
  filters: ISearchFilter;
  limit: number;
  offset: number;
}
