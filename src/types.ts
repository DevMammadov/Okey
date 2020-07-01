export interface IGood {
  id: number;
  name: string;
  view: number;
  like: number;
  enabled: boolean;
  badge: string;
  warranty: string;
  categoryId: number;
  subCategId: number | null;
  brandId: number;
  colorId: number; // selected color for showing element
}

export interface IProductInfo {
  id: number;
  price: number;
  income: number;
  atStore: boolean;
  discount: number;
  enabled: boolean;
  stockCount: number;
  productId: number;
  colorId: number;
  code: string;
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

export interface IService {
  id: number;
  text: string;
  icon: string;
}

export interface IColor {
  id: number;
  name: string;
  code: string;
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
