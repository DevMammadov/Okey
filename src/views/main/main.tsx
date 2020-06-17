import React, { FC } from "react";
import { Slider } from "./components";
import { Grid } from "@material-ui/core";
import { useStyles } from "./main.style";
import { GoodCarusel } from "components/shared";
import { translator } from "translation";
import { IAppState } from "store/reducers";
import { connect } from "react-redux";
import { IProduct } from "views/category/types";

export interface IMainPage {
  products: IProduct[];
}

const Main: FC<IMainPage> = ({ products }) => {
  const classes = useStyles();
  const lang = translator().main;

  return (
    <Grid container>
      <Grid item xs={12} className={classes.sliderContainer}>
        <Slider />
      </Grid>
      <Grid item xs={12} className={classes.section}>
        <GoodCarusel
          list={products}
          title={lang.mostViewedGoods}
          classList={{
            card: classes.sliderCard,
            carusel: classes.slider,
          }}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  products: state.category.products,
});
export default connect(mapStateToProps, null)(Main);
