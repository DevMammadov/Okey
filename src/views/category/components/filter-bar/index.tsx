import React, { FC } from "react";
import { Grid, IconButton, Paper } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import ViewListIcon from "@material-ui/icons/ViewList";
import { useStyles } from "./filter-bar.style";
import clsx from "clsx";

export interface IFilterBar {
  onChange(isApp: boolean): void;
  isApp: boolean;
}

export const FilterBar: FC<IFilterBar> = ({ onChange, isApp }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.filterBar}>
        <div></div>
        <div>
          <IconButton onClick={() => onChange(true)} className={clsx(isApp && classes.activeViewMode)}>
            <AppsIcon />
          </IconButton>
          <IconButton onClick={() => onChange(false)} className={clsx(!isApp && classes.activeViewMode)}>
            <ViewListIcon />
          </IconButton>
        </div>
      </Paper>
    </Grid>
  );
};
