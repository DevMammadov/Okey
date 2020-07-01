import values from "data/value.json";
import imgList from "data/images.json";
import categoryList from "data/category.json";
import subCategList from "data/sub-category.json";
import productList from "data/products.json";
import brands from "data/brands.json";
import attributeList from "data/attributes.json";
import productAttributeList from "data/product_attribute.json";
import { ISingleProduct, IProducDetail } from "views/product/types";
import { IAttribute, IProduct } from "views/category/types";
import productInfoList from "data/productInfo.json";
import colorList from "data/colors.json";
import { IColor } from "types";
import { IGetProduct } from "views/product/types";

export default class ProductApi {
  static getProduct = (name: string) => {
    const product = productList.filter(
      (p) => p.name.replace(/ /g, "-").toLocaleLowerCase() === name && p.enabled === true
    )[0];
    let newProduct: ISingleProduct = {} as any;
    let attributes: IAttribute[] = [];
    let images = imgList.filter((img) => img.productId === product.id);
    let ProductColorList: IColor[] = [];

    //find all colors
    for (let img of images) {
      let color = colorList.filter((c) => c.id === img.colorId)[0];
      if (!ProductColorList.includes(color)) {
        ProductColorList.push(color);
      }
    }

    if (product) {
      let productAttrs = productAttributeList.filter((pa) => pa.productId === product.id);

      for (let pa of productAttrs) {
        let name = attributeList.filter((a) => a.id === pa.attributeId)[0].name;
        let value = values.filter((v) => v.id === pa.valueId)[0].value;
        attributes.push({ name, value });
      }

      newProduct = {
        id: product.id,
        name: product.name,
        badge: product.badge,
        like: product.like,
        view: product.view,
        warranty: product.warranty,
        categoryId: categoryList.filter((c) => c.id === product.categoryId)[0]?.id,
        subCategId: subCategList.filter((c) => c.id === product.subCategId)[0]?.id,
        attributes: attributes,
        colors: ProductColorList,
      };

      return newProduct;
    } else {
      return "Product not fount";
    }
  };

  static getProductInfo = ({ name, color }: IGetProduct) => {
    const product = productList.filter((p) => p.name.replace(/ /g, "-").toLocaleLowerCase() === name)[0];
    let productColor = colorList.filter((c) => c.id === product?.colorId)[0];
    let selectedColor = color || productColor;
    let productDetails: IProducDetail;

    let productInfo = productInfoList.filter((pi) => pi.productId === product.id && pi.colorId === selectedColor.id)[0];

    productDetails = {
      selectedColor: selectedColor,
      price: productInfo.price,
      atStore: productInfo.atStore,
      discount: productInfo.discount,
      atStock: productInfo.stockCount > 0,
      images: imgList
        .filter((img) => img.productId === product.id && img.colorId === selectedColor.id)
        .map((img) => img.name),
    };

    return productDetails;
  };

  static getSimiliarProducts = () => {
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
}
