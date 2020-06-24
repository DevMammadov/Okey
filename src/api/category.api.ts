import productList from "data/products.json";
import imgList from "data/images.json";
import brands from "data/brands.json";
import productAttributeList from "data/product_attribute.json";
import attributeList from "data/attributes.json";
import values from "data/value.json";
import { IProductAttribute, IGood } from "types";
import { IFilterField, IValue, IProduct, IAttribute, IProductPayload } from "views/category/types";
import categoryList from "data/category.json";
import subCategList from "data/sub-category.json";

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
                return filteredByFilter.concat(categProducts.filter((cp) => cp.id === p.productId));
              });
          } else {
            filteredByFilter = [...filteredByFilter, ...categProducts.filter((cp) => cp.brandId === filter.valueId)];
          }
        }
        categProducts = filteredByFilter;
      }
    }

    //filter products by price
    if (filters) {
      if (filters?.price?.length > 0) {
        categProducts = categProducts.filter((p) => p.price >= filters.price[0] && p.price <= filters.price[1]);
      }
    }

    // adding attributes to every product
    for (let product of categProducts) {
      let productAttributes: IAttribute[] = [];
      const productAttrs = productAttributeList.filter((pa) => pa.productId === product.id);

      productAttributes.push({ name: "Brand", value: brands.filter((b) => b.id === product.brandId)[0].name });

      for (let pa of productAttrs) {
        let name = attributeList.filter((a) => a.id === pa.attributeId)[0].name;
        let value = values.filter((v) => v.id === pa.valueId)[0].value;
        productAttributes.push({ name, value });
      }

      products.push({
        id: product.id,
        name: product.name,
        price: product.price,
        badge: product.badge,
        discount: product.discount,
        enabled: product.enabled,
        like: product.like,
        view: product.view,
        warranty: product.warranty,
        categoryId: categoryList.filter((c) => c.id === product.categoryId)[0]?.id,
        subCategId: subCategList.filter((c) => c.id === product.subCategId)[0]?.id,
        image: imgList.filter((img) => img.productId === product.id)[0].name,
        attributes: productAttributes,
      });
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
    filterFelds.price = [Math.min(...unicProducts.map((p) => p.price)), Math.max(...unicProducts.map((p) => p.price))];

    return filterFelds;
  };
}
