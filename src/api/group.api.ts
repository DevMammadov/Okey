import categoryList from "data/category.json";
import productList from "data/products.json";
import imgList from "data/images.json";
import { ICategoryList, IGroup, IGood } from "types";
import { IProduct, IAttribute } from "views/category/types";
import { IGroupResponse, IGroupResponsePayload } from "views/group/types";
import productInfoList from "data/productInfo.json";
import productAttributeList from "data/product_attribute.json";
import values from "data/value.json";
import brands from "data/brands.json";
import attributeList from "data/attributes.json";

export default class GroupApi {
  static getGroupResponse = (payload: IGroupResponsePayload) => {
    const findedProducts = productList.filter(
      (p) => p.name.toLocaleLowerCase().includes(payload?.search?.toLocaleLowerCase()) && p.enabled
    );

    let findedCategories: IGroup[] = [];
    let resultProducts: IProduct[] = [];
    let sortedProducts: IGood[] = [];
    let pagedProducts: IGood[] = [];
    let offset = 10;
    let page = Number(payload.page) || 1;
    let dataCount = 0;

    // find categories of finded products
    for (let product of findedProducts) {
      let categ = categoryList.filter((c) => c.id === product.categoryId)[0];
      let newCateg = { name: categ.name, icon: categ.icon, id: categ.id };
      if (!findedCategories.includes(newCateg)) {
        findedCategories.push(newCateg);
      }
    }

    // check category name
    if (payload?.categ === "all") {
      sortedProducts = findedProducts;
    } else {
      let searchCateg = findedCategories.filter((c) => c.name.toLowerCase() === payload?.categ)[0];
      if (searchCateg) {
        sortedProducts = findedProducts.filter((p) => p.categoryId === searchCateg.id);
      } else {
        sortedProducts = [];
      }
    }

    // make pagination
    dataCount = sortedProducts.length;
    if (sortedProducts.length > offset) {
      pagedProducts = sortedProducts.slice((page - 1) * offset, (page - 1) * offset + offset);
    } else {
      pagedProducts = sortedProducts;
    }

    // collect all products
    for (let product of pagedProducts) {
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
        resultProducts.push({
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

    return {
      categs: findedCategories,
      products: resultProducts,
      resultCount: findedProducts.length,
      productCount: dataCount,
    };
  };
}
