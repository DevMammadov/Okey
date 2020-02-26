import React from "react";
import { Slider } from "./components";
import { Grid } from "@material-ui/core";
import { useStyles } from "./main.style";
import { GoodCarusel } from "components/shared";
import goodList from "data/goodList.json";
import imgList from "data/images.json";
import { translator } from "translation";

export const Main = () => {
  const classes = useStyles();
  const lang = translator().main;

  return (
    <Grid container>
      <Grid item xs={12} className={classes.sliderContainer}>
        <Slider />
      </Grid>
      <Grid item xs={12} className={classes.caruselContainer}>
        <GoodCarusel
          list={goodList}
          images={imgList}
          title={lang.mostViewedGoods}
          classList={{
            card: classes.sliderCard,
            carusel: classes.slider
          }}
        />
      </Grid>
    </Grid>
  );
};
