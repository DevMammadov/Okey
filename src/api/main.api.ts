import { IProduct, IAttribute } from "views/category/types";
import productList from "data/products.json";
import brands from "data/brands.json";
import productAttributeList from "data/product_attribute.json";
import attributeList from "data/attributes.json";
import values from "data/value.json";
import imgList from "data/images.json";
import categoryList from "data/category.json";
import subCategList from "data/sub-category.json";
import serviceList from "data/services.json";
import productInfoList from "data/productInfo.json";

export default class MainApi {
  static getMostViewed = () => {
    let products: IProduct[] = [];

    for (let product of productList) {
      let productAttributes: IAttribute[] = [];
      productAttributes.push({ name: "Brand", value: brands.filter((b) => b.id === product.brandId)[0].name });
      const productAttrs = productAttributeList.filter((pa) => pa.productId === product.id);

      const productInfo = productInfoList.filter(
        (pi) => pi.productId === product.id && pi.colorId === product.colorId
      )[0];

      for (let pa of productAttrs) {
        let name = attributeList.filter((a) => a.id === pa.attributeId)[0].name;
        let value = values.filter((v) => v.id === pa.valueId)[0].value;
        productAttributes.push({ name, value });
      }

      if (product.enabled) {
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
          subCategId: subCategList.filter((c) => c.id === product.subCategId)[0]?.id,
          image: imgList.filter((img) => img.productId === product.id && img.colorId === product.colorId)[0].name,
          attributes: productAttributes,
        });
      }
    }
    return products;
  };

  static getServices = () => {
    return serviceList;
  };
}
