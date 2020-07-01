import React, { FC } from "react";
import { useStyles } from "./menu.style";
import { Grid, Icon, Paper } from "@material-ui/core";
import { ICategory, ISubCategory } from "types";
import { NavLink } from "react-router-dom";

interface IMenuPros {
  category: ICategory[];
}

export const Menu: FC<IMenuPros> = ({ category }) => {
  const classes = useStyles();

  const handleCategClick = (categ: string) => {
    return `/${categ.replace(/ /g, "-").toLowerCase()}`;
  };

  const handleSubcategClick = (categ: string, subcateg: string) => {
    const subCateg = `-${subcateg.replace(/ /g, "-").toLowerCase()}`;
    return `/${categ.replace(/ /g, "-").toLowerCase()}/${subCateg}`;
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.container}>
        <ul>
          <li>
            <NavLink exact to="/">
              <Icon className={classes.icon}>home</Icon>
              <span>Ana sehife</span>
            </NavLink>
          </li>
          {category.map((categ: ICategory) => (
            <li key={categ.id}>
              <NavLink exact to={() => handleCategClick(categ.name)}>
                {categ.icon && <Icon className={classes.icon}>{categ.icon}</Icon>}
                <span>{categ.name}</span>
              </NavLink>
              {categ?.subCategory?.length > 0 && (
                <Paper>
                  <ul>
                    {categ.subCategory.map((subCateg: ISubCategory) => (
                      <li key={subCateg.id}>
                        <NavLink to={() => handleSubcategClick(categ.name, subCateg.name)} exact>
                          {subCateg.icon && <Icon className={classes.icon}>{subCateg.icon}</Icon>}
                          <span>{subCateg.name}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </Paper>
              )}
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};
