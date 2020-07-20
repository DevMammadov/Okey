import React, { FC } from "react";
import { useStyles } from "./basket.style";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { BasketActions } from "./store/action";
import { BasketTable, IProductCount } from "./components";
import { Grid } from "@material-ui/core";
import { IBasketProduct } from "components/layout/header/types";
import { updateBasket } from "components/layout/header/store/action";

export interface IBasket {
  basket: IBasketProduct[];
  updateBasket(basket: IBasketProduct[]): void;
}

const Basket: FC<IBasket> = ({ basket, updateBasket }) => {
  const lang = useTranslator();
  const classes = useStyles();

  const handleCountChange = (product: IProductCount) => {
    let basketCopy = basket ? [...basket] : [];
    let findedProduct = basketCopy.filter((p) => p.id === product.id)[0];
    let index = basketCopy.indexOf(findedProduct);
    findedProduct.count = product.count;
    basketCopy[index] = findedProduct;
    updateBasket(basketCopy);
  };

  return (
    <section>
      <Grid container>
        <Grid item xs={12}>
          <BasketTable onCountChange={handleCountChange} data={basket} />
        </Grid>
      </Grid>
    </section>
  );
};

const mapStateToProps = (state: IAppState) => ({ basket: state.header.basket });

export default connect(mapStateToProps, { ...BasketActions, updateBasket })(Basket);
