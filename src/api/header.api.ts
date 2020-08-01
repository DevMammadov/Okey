import productList from "data/products.json";
import productInfoList from "data/productInfo.json";
import imgList from "data/images.json";
import { ISearchResult } from "components/layout/header/types";
import { pick } from "lodash";

export default class HeaderApi {
  static searchGood = (text: string) => {
    const findedProducts = productList.filter(
      (p) => p.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()) && p.enabled
    );

    let resultProducts: ISearchResult[] = [];

    for (let product of findedProducts) {
      resultProducts.push({
        id: product.id,
        price: productInfoList.filter((pi) => pi.id === product.id)[0].price,
        img: imgList.filter((img) => img.productId === product.id)[0].name,
        name: product.name,
        discount: productInfoList.filter((pi) => pi.id === product.id)[0].discount,
      });
    }

    return resultProducts;
  };
}
