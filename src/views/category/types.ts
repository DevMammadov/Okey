export interface IChecked {
  brand: string;
  value: string;
}

export interface IValue {
  value: string;
  valueId: number;
  count: number;
}

export interface IFilterField {
  attribute: string;
  attributeId: number;
  values: IValue[];
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
