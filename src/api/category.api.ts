import productList from "data/products.json";
import imgList from "data/images.json";
import brands from "data/brands.json";
import productAttributeList from "data/product_attribute.json";
import attributeList from "data/attributes.json";
import values from "data/value.json";
import { IProductAttribute, IGood, IProductInfo } from "types";
import { IFilterField, IValue, IProduct, IAttribute, IProductPayload } from "views/category/types";
import categoryList from "data/category.json";
import productInfoList from "data/productInfo.json";

export default class CategoryApi {
  static getProducts = ({ categId, filters }: IProductPayload) => {
    let products: IProduct[] = [];

    // filter products by category
    let categProducts: IGood[] = productList.filter((p) => p.categoryId === categId);

    // filter by filters
    let filteredByFilter: IGood[] = [];
    if (filters) {
      if (filters?.attributes?.length > 0) {
        for (let filter of filters.attributes) {
          if (filter.attributeId > 0) {
            productAttributeList
              .filter((pa) => pa.attributeId === filter.attributeId && pa.valueId === filter.valueId)
              .map((p) => {
                return filteredByFilter.push(categProducts.filter((cp) => cp.id === p.productId)[0]);
              });
          } else {
            filteredByFilter = [...filteredByFilter, ...categProducts.filter((cp) => cp.brandId === filter.valueId)];
          }
        }
        categProducts = filteredByFilter;
      }
    }

    //filter products by price
    let filteredByPrice: IGood[] = [];
    if (filters) {
      if (filters?.price?.length > 0) {
        for (let categP of categProducts) {
          let findedProduct = productInfoList.filter(
            (pi) => pi.productId === categP.id && pi.price >= filters.price[0] && pi.price <= filters.price[1]
          )[0];
          if (findedProduct) {
            filteredByPrice.push(categP);
          }
        }
        categProducts = filteredByPrice;
      }
    }

    // adding attributes to every product
    for (let product of categProducts) {
      let productAttributes: IAttribute[] = [];
      const productAttrs = productAttributeList.filter((pa) => pa.productId === product.id);
      const productInfo = productInfoList.filter(
        (pi) => pi.productId === product.id && pi.colorId === product.colorId
      )[0];

      productAttributes.push({ name: "Brand", value: brands.filter((b) => b.id === product.brandId)[0].name });

      for (let pa of productAttrs) {
        let name = attributeList.filter((a) => a.id === pa.attributeId)[0].name;
        let value = values.filter((v) => v.id === pa.valueId)[0].value;
        productAttributes.push({ name, value });
      }
      if (product.enabled && productInfo.enabled) {
        products.push({
          id: product.id,
          name: product.name,
          price: productInfo.price,
          badge: product.badge,
          discount: productInfo.discount,
          like: product.like,
          view: product.view,
          warranty: product.warranty,
          categoryId: categoryList.filter((c) => c.id === product.categoryId)[0]?.id,
          image: imgList.filter((img) => img.productId === product.id && img.colorId === product.colorId)[0].name,
          attributes: productAttributes,
        });
      }
    }

    return products;
  };

  static getFilterFields = (categId: number) => {
    let filterFelds: IFilterField = { attributes: [], price: [] };
    const unicProducts = productList.filter((p) => p.categoryId === categId);
    let unicProductAttributes: IProductAttribute[] = [];

    for (let product of unicProducts) {
      unicProductAttributes = [
        ...unicProductAttributes,
        ...productAttributeList.filter((pa) => pa.productId === product.id),
      ];
    }

    //adding brands to filter
    let brandList: IValue[] = [];
    for (let brand of brands) {
      let productCount = unicProducts.filter((p) => p.brandId === brand.id).length;
      if (productCount > 0) {
        brandList.push({ value: brand.name, valueId: brand.id, count: productCount });
      }
    }
    filterFelds.attributes.push({ attribute: "Brend", attributeId: 0, values: brandList });

    // setting attribute filter
    for (let attr of attributeList) {
      if (attr.isFilter) {
        let groupedProductAttrs = unicProductAttributes.filter((pa) => pa.attributeId === attr.id);
        if (groupedProductAttrs.length > 0) {
          let valueList: IValue[] = [];
          for (let val of values) {
            let groupedValues = groupedProductAttrs.filter((gpa) => gpa.valueId === val.id);
            if (groupedValues.length > 0) {
              valueList.push({ value: val.value, valueId: val.id, count: groupedValues.length });
            }
          }
          filterFelds.attributes.push({ attribute: attr.name, attributeId: attr.id, values: valueList });
        }
      }
    }

    // adding price filter
    let productInfo: IProductInfo[] = [];

    for (let product of unicProducts) {
      productInfo.push(
        productInfoList.filter((pi) => pi.productId === product.id && pi.colorId === product.colorId)[0]
      );
    }

    filterFelds.price = [Math.min(...productInfo.map((p) => p.price)), Math.max(...productInfo.map((p) => p.price))];

    return filterFelds;
  };
}
