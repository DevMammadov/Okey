import React from "react";
import { SectionTitle } from "../section-title";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { useStyles } from "./info.style";

export const Info = () => {
  const classes = useStyles();
  return (
    <>
      <SectionTitle title="Məlumat" icon="info" />
      <List
        component="nav"
        aria-label="categories"
        className={classes.infoList}
      >
        <ListItem button href="#simple-list">
          <ListItemText primary="Online sifariş" />
        </ListItem>
        <ListItem button href="#simple-list">
          <ListItemText primary="Geri qaytarılma" />
        </ListItem>
        <ListItem button href="#simple-list">
          <ListItemText primary="Zəmanət" />
        </ListItem>
        <ListItem button href="#simple-list">
          <ListItemText primary="Məxvilik siyasəti" />
        </ListItem>
      </List>
    </>
  );
};
