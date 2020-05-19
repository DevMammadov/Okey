import React, { FC } from "react";
import { useStyles } from "./menu.style";
import { Grid } from "@material-ui/core";
import categoryList from "data/category.json";
import subCategoryList from "data/sub-category.json";
import { ICategory, ISubCategory } from "types";
import { NavLink } from "react-router-dom";
import { links } from "links";

interface IMenuPros {}

export const Menu: FC<IMenuPros> = () => {
  const classes = useStyles();

  const haveSubCateg = (id: number) => {
    const subcateg = subCategoryList.filter(
      (subc) => subc.categoryId === id
    )[0];

    return !!subcateg;
  };

  const handleLinkClick = (link: string, id: number) => {
    if (haveSubCateg(id)) {
      return "#";
    } else {
      return `/${links.category}/${link.replace(" ", "-").toLowerCase()}`;
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <ul>
          {categoryList.map((categ: ICategory) => (
            <li key={categ.id}>
              <NavLink exact to={() => handleLinkClick(categ.name, categ.id)}>
                {categ.name}
              </NavLink>
              <ul>
                {subCategoryList.map(
                  (subCateg: ISubCategory) =>
                    subCateg.categoryId === categ.id && (
                      <li key={subCateg.id}>
                        <NavLink
                          exact
                          to={() => handleLinkClick(subCateg.name, subCateg.id)}
                        >
                          {subCateg.name}
                        </NavLink>
                      </li>
                    )
                )}
              </ul>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};
