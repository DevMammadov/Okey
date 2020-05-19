import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./footer.style";
import categories from "data/category.json";
import { Categs, Contacts, Info } from "./components";

export const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid item xs={4}>
        <Contacts />
      </Grid>
      <Grid item xs={4}>
        <Categs categories={categories.map((categ) => categ.name)} />
      </Grid>
      <Grid item xs={4}>
        <Info />
      </Grid>
    </Grid>
  );
};
