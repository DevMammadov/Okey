import React, { FC } from "react";
import { useStyles } from "./menu.style";
import { Grid } from "@material-ui/core";
import categoryList from "data/category.json";
import subCategoryList from "data/sub-category.json";
import { ICategory, ISubCategory } from "types";
import { NavLink } from "react-router-dom";

interface IMenuPros {}

export const Menu: FC<IMenuPros> = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <ul>
          {categoryList.map((categ: ICategory) => (
            <li key={categ.id}>
              <NavLink to="material.com">{categ.name}</NavLink>
              <ul>
                {subCategoryList.map(
                  (subCateg: ISubCategory) =>
                    subCateg.categoryId === categ.id && (
                      <li key={subCateg.id}>
                        <NavLink to="material.com">{subCateg.name}</NavLink>
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
