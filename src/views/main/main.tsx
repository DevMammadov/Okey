import React from "react";
import { Slider } from "./components";
import { Grid } from "@material-ui/core";
import { useStyles } from "./main.style";
import { GoodCarusel } from "components/shared";
import goodList from "data/goodList.json";
import imgList from "data/images.json";

export const Main = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.sliderContainer}>
        <Slider />
      </Grid>
      <Grid item xs={12} className={classes.caruselContainer}>
        <GoodCarusel
          list={goodList}
          images={imgList}
          title="Ən çox baxılan mallar"
        />
      </Grid>
    </Grid>
  );
};
