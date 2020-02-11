import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./header.style";

export const Header = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>header</div>
      </Grid>
    </Grid>
  );
};
