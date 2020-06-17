import subCategoryList from "data/sub-category.json";
import categoryList from "data/category.json";
import { ICategory } from "types";

export default class LayoutApi {
  static getCategory = () => {
    let categs: ICategory[] = [];

    for (let categ of categoryList) {
      let subCategs = subCategoryList.filter((sb) => sb.categoryId === categ.id);
      categs.push({
        id: categ.id,
        name: categ.name,
        icon: categ.icon,
        subCategory: subCategs,
        deleted: categ.deleted,
        enabled: categ.enabled,
      });
    }
    return categs;
  };
}
