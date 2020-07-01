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
import { ICategory } from "types";
import { useHistory, useParams } from "react-router-dom";

export interface IMainPage {
  main: IMainPageState;
  basket: IBasketProduct[];
  category: ICategory[]; // from layout
  getMostViewed(): void;
  toggleBasket(product: IBasketProduct): void;
}

const Main: FC<IMainPage> = ({ main, basket, getMostViewed, toggleBasket, category }) => {
  const classes = useStyles();
  const lang = useTranslator("main");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    getMostViewed();
    console.log(params);
  }, [getMostViewed, params]);

  const handleAddToBasket = (product: IBasketProduct) => {
    toggleBasket(product);
  };

  const handleCardClick = (name: string) => {
    let product = main.mostViewed.filter((p) => p.name === name)[0];
    let categ = category.filter((c) => c.id === product.categoryId)[0];

    if (product.subCategId) {
      let subCateg = categ.subCategory.filter((s) => s.id === product.subCategId)[0]?.name.toLocaleLowerCase();
      history.push(`/${categ?.name.toLocaleLowerCase()}/${subCateg}/${product.name.toLocaleLowerCase()}`);
    } else {
      history.push(`/${categ?.name.toLocaleLowerCase()}/${product?.name.replace(/ /g, "-").toLocaleLowerCase()}`);
    }
  };

  return (
    <>
      <section className={classes.sliderContainer}>
        <Slider />
      </section>
      <section>
        <Grid container>
          <Grid item xs={12} className={classes.section}>
            <ProductCarusel
              list={main.mostViewed}
              title={lang.newProducts}
              basket={basket}
              onToggleBasket={handleAddToBasket}
              onCardClick={handleCardClick}
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
      </section>
    </>
  );
};

const mapStateToProps = (state: IAppState) => ({
  main: state.mainPage,
  basket: state.header.basket,
});
export default connect(mapStateToProps, { ...mainPageActions, toggleBasket })(Main);
