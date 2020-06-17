export interface IGood {
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
  isfilter: boolean;
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
