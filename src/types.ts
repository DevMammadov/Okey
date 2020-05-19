export interface IGoods {
  id: number;
  name: string;
  code: string;
  income: number;
  view: number;
  like: number;
  price: number;
  discount: number;
  enabled: boolean;
  badge: string;
  warranty: string;
  atStore: boolean;
  buyCount: number;
  categoryId: number;
  brandId: number;
}

export interface IImages {
  id: number;
  name: string;
  colorId: number;
  productId: number;
}

export interface IAttributes {
  id: number;
  name: string;
}

export interface IBrands {
  id: number;
  name: string;
  logo: string;
  isFilter: boolean;
  enabled: boolean;
}

export interface IProductAttribute {
  id: number;
  productId: number;
  attributeId: number;
  valueId: number;
}

export interface IFilterField {
  name: string;
  count: number;
}

export interface IGoods {
  id: number;
  name: string;
  code: string;
  income: number;
  view: number;
  like: number;
  price: number;
  discount: number;
  enabled: boolean;
  badge: string;
  warranty: string;
  atStore: boolean;
  buyCount: number;
  categoryId: number;
  brandId: number;
}

// ---------- Response types

export interface ISubCategory {
  id: number;
  name: string;
  icon: string;
  enabled: boolean;
  deleted: boolean;
}

export interface ICategory {
  id: number;
  name: string;
  icon: string;
  enabled: boolean;
  deleted: boolean;
  subCategory: ISubCategory[];
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
