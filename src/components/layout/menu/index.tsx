import React, { FC } from "react";
import { useStyles } from "./menu.style";
import { Grid, Icon, Paper } from "@material-ui/core";
import { ICategory, ISubCategory } from "types";
import { NavLink } from "react-router-dom";
import { links } from "links";

interface IMenuPros {
  category: ICategory[];
}

export const Menu: FC<IMenuPros> = ({ category }) => {
  const classes = useStyles();

  const handleLinkClick = (link: string, id: number) => {
    if (category.filter((c) => c.id === id)[0].subCategory.length > 0) {
      return "#";
    } else {
      return `/${links.category}/${link.replace(" ", "-").toLowerCase()}`;
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <ul>
          <li>
            <NavLink exact to="/">
              <Icon className={classes.icon}>home</Icon>
              <span>Ana sehife</span>
            </NavLink>
          </li>
          {category.map((categ: ICategory) => (
            <li key={categ.id}>
              <NavLink exact to={() => handleLinkClick(categ.name, categ.id)}>
                {categ.icon && <Icon className={classes.icon}>{categ.icon}</Icon>}
                <span>{categ.name}</span>
              </NavLink>
              {categ?.subCategory?.length > 0 && (
                <Paper>
                  <ul>
                    {categ.subCategory.map((subCateg: ISubCategory) => (
                      <li key={subCateg.id}>
                        <NavLink exact to={() => handleLinkClick(subCateg.name, subCateg.id)}>
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
