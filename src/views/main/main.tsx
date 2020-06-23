import React, { FC, useEffect } from "react";
import { Slider } from "./components";
import { Grid } from "@material-ui/core";
import { useStyles } from "./main.style";
import { ProductCarusel } from "components/shared";
import { IAppState } from "store/reducers";
import { connect } from "react-redux";
import { mainPageActions } from "./store/action";
import { IMainPageState } from "./store/reducer";
import { useTranslator } from "localization";
import { IBasketProduct } from "components/layout/header/types";
import { toggleBasket } from "components/layout/header/store/action";

export interface IMainPage {
  main: IMainPageState;
  basket: IBasketProduct[];
  getMostViewed(): void;
  toggleBasket(product: IBasketProduct): void;
}

const Main: FC<IMainPage> = ({ main, basket, getMostViewed, toggleBasket }) => {
  const classes = useStyles();
  const lang = useTranslator("main");

  const handleAddToBasket = (product: IBasketProduct) => {
    toggleBasket(product);
  };

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
          basket={basket}
          onToggleBasket={handleAddToBasket}
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
  basket: state.header.basket,
});
export default connect(mapStateToProps, { ...mainPageActions, toggleBasket })(Main);
