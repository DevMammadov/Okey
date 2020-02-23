export interface IGoods {
  id: number;
  name: string;
  code: string;
  income: number;
  view: number;
  like: number;
  price: number;
  discount: number;
  stock: number;
  enabled: boolean;
  categoryId: number;
  brandId: number;
}

export interface ICategory {
  id: number;
  name: string;
  nameRu: string;
  enabled: boolean;
  deleted: boolean;
}

export interface ISubCategory {
  id: number;
  name: string;
  nameRu: string;
  categoryId: number;
  icon: string;
  enabled: boolean;
  deleted: boolean;
}

export interface IImages {
  id: number;
  name: string;
  color: string;
  productId: number;
}
