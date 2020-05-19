import React, { FC } from "react";
import { SectionTitle } from "../section-title";
import { List, ListItemText, ListItem } from "@material-ui/core";
import { useStyles } from "./categories.style";

export interface ICateg {
  categories: string[];
}

export const Categs: FC<ICateg> = ({ categories }) => {
  const classes = useStyles();
  return (
    <>
      <div>
        <SectionTitle title="Kateqoriyalar" icon="headset" />
        <List component="nav" aria-label="categories">
          {categories.map((categ, index) => (
            <ListItem
              className={classes.listItem}
              key={index}
              button
              href="#simple-list"
            >
              <ListItemText primary={categ} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};
