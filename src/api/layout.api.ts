import categoryList from "data/category.json";
import categGroup from "data/categGroup.json";
import { ICategoryList } from "types";

export default class LayoutApi {
  static getCategory = () => {
    let categories: ICategoryList[] = [];

    categories.push({
      groupName: "",
      icon: "",
      categs: categoryList.filter((c) => c.groupId === null && c.enabled && !c.deleted),
    });

    for (let group of categGroup) {
      let cats = categoryList.filter((c) => c.groupId === group.id && c.enabled && !c.deleted);
      if (cats.length > 0) {
        categories.push({
          groupName: group.name,
          icon: group.icon,
          categs: cats,
        });
      }
    }

    return categories;
  };
}
