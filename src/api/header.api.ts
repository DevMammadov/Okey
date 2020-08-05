import productList from "data/products.json";
import productInfoList from "data/productInfo.json";
import imgList from "data/images.json";
import { ISearchResult } from "components/layout/header/types";
import categoryList from "data/category.json";
import { pick } from "lodash";

export default class HeaderApi {
  static searchGood = (text: string) => {
    const findedProducts = productList.filter(
      (p) => p.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()) && p.enabled
    );

    const max5Product = findedProducts.length > 5 ? findedProducts.slice(0, 5) : findedProducts;

    let resultProducts: ISearchResult[] = [];

    for (let product of max5Product) {
      resultProducts.push({
        id: product.id,
        price: productInfoList.filter((pi) => pi.id === product.id)[0].price,
        img: imgList.filter((img) => img.productId === product.id)[0].name,
        name: product.name,
        discount: productInfoList.filter((pi) => pi.id === product.id)[0].discount,
        category: categoryList.filter((c) => c.id === product.categoryId)[0].name,
      });
    }

    return resultProducts;
  };
}
