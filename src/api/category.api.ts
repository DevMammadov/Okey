import productList from "data/products.json";
import imgList from "data/images.json";
import brands from "data/brands.json";
import productAttributeList from "data/product_attribute.json";
import attributeList from "data/attributes.json";
import values from "data/value.json";
import { IProduct, IAttribute } from "types";

export default class CategoryApi {
  static getProducts = (categId: number) => {
    let products: IProduct[] = [];

    const categProducts = productList.filter((p) => p.categoryId === categId);
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
        image: imgList.filter((img) => img.productId === product.id)[0].name,
        attributes: productAttributes,
      });
    }

    return products;
  };
}
