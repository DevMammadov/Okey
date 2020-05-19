import React, { FC } from "react";
import { useStyles } from "./menu.style";
import { Grid } from "@material-ui/core";
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
          {category.map((categ: ICategory) => (
            <li key={categ.id}>
              <NavLink exact to={() => handleLinkClick(categ.name, categ.id)}>
                {categ.name}
              </NavLink>
              <ul>
                {categ.subCategory.map((subCateg: ISubCategory) => (
                  <li key={subCateg.id}>
                    <NavLink
                      exact
                      to={() => handleLinkClick(subCateg.name, subCateg.id)}
                    >
                      {subCateg.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};
