import React, { FC, useEffect } from "react";
import { Slider } from "./components";
import { Grid } from "@material-ui/core";
import { useStyles } from "./main.style";
import { ProductCarusel } from "components/shared";
import { translator } from "translation";
import { IAppState } from "store/reducers";
import { connect } from "react-redux";
import { mainPageActions } from "./store/action";
import { IMainPageState } from "./store/reducer";
import { useTranslator } from "localization";

export interface IMainPage {
  main: IMainPageState;
  getMostViewed(): void;
}

const Main: FC<IMainPage> = ({ main, getMostViewed }) => {
  const classes = useStyles();
  const lang = useTranslator("main");

  useEffect(() => {
    getMostViewed();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} className={classes.sliderContainer}>
        <Slider />
      </Grid>
      <Grid item xs={12} className={classes.section}>
        <ProductCarusel
          list={main.mostViewed}
          title={lang.newProducts}
          classList={{
            card: classes.sliderCard,
            carusel: classes.slider,
          }}
        />
      </Grid>
      <Grid item xs={12} className={classes.section}>
        <ProductCarusel
          list={main.mostViewed}
          title={lang.mostViewedProducts}
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
  main: state.mainPage,
});
export default connect(mapStateToProps, mainPageActions)(Main);
