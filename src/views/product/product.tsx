import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { productPageActions } from "./store/action";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { ImageSlider, ActionBar } from "./components";
import { IGetProduct } from "./types";
import { useStyles } from "./product.style";
import { Price } from "components/shared/card/components";
import { IBasketProduct } from "components/layout/header/types";
import { toggleBasket } from "components/layout/header/store/action";
import { getServices } from "views/main/store/action";
import { ServiceBar, Card, Table, ProductCarusel } from "components/shared";
import { IService, IColor } from "types";
import { ColorBar, ChipBar } from "./components";
import { IProductPageState } from "./store/reducer";
import { useTranslator } from "localization";

export interface IProductPage {
  productState: IProductPageState;
  basket: IBasketProduct[];
  services: IService[];
  getProduct(name: string): void;
  getSimiliar(category: string): void;
  getProductInfo(product: IGetProduct): void;
  toggleBasket(product: IBasketProduct): void;
  getServices(): void;
}

const Product: FC<IProductPage> = ({
  productState,
  getProduct,
  basket,
  toggleBasket,
  getServices,
  services,
  getProductInfo,
  getSimiliar,
}) => {
  const params: any = useParams();
  const classes = useStyles();
  const lang = useTranslator("product");

  useEffect(() => {
    getProduct(params.product);
    getProductInfo({ name: params.product });
    getSimiliar(params.category);
    getServices();
  }, [getProduct, getServices, getProductInfo, params, getSimiliar]);

  const handleAddToBasket = () => {
    toggleBasket({
      id: productState.product.id,
      image: productState.productInfo.images && productState.productInfo.images[0],
      name: productState.product.name,
      price: productState.productInfo.price - productState.productInfo.discount,
      count: 1,
    });
  };

  const handleColorChange = (color: IColor) => {
    if (color !== productState?.productInfo?.selectedColor) {
      getProductInfo({ name: params.product, color });
    }
  };

  return (
    <section>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={5}>
              <ImageSlider images={productState.productInfo?.images} />
            </Grid>
            <Grid item xs={7} className={classes.infoSide}>
              <h1 className={classes.productName}>{productState.product.name}</h1>
              <Price
                discount={productState.productInfo.discount}
                classes={{ discount: classes.discount, price: classes.originalPrice }}
                className={classes.price}
                price={productState.productInfo.price}
                isList={true}
              />
              <div className={classes.chipColorContainer}>
                <ColorBar
                  selected={productState.productInfo?.selectedColor?.id}
                  colors={productState.product.colors}
                  onSelect={handleColorChange}
                />
                <ChipBar atStock={productState.productInfo.atStock} atStore={productState.productInfo.atStore} />
              </div>
              <ActionBar
                onBasketAdd={handleAddToBasket}
                inBasket={basket.some((p) => p.id === productState.product.id)}
              />
              <ServiceBar services={services} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <h2 className={classes.attributeHeader}> Göstəricilər </h2>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={5}>
              <Card
                item={{
                  id: productState.product?.id,
                  image: productState.productInfo?.images && productState.productInfo?.images[0],
                  badge: productState.product?.badge,
                  discount: productState.productInfo?.discount,
                  name: productState.product?.name,
                  price: productState.productInfo?.price,
                  warranty: productState.product?.warranty,
                  view: productState.product?.view,
                  like: productState.product?.like,
                  categoryId: productState.product?.categoryId,
                  attributes: {} as any,
                }}
                onToggleBasket={handleAddToBasket}
                inBasket={basket.some((p) => p.id === productState.product.id)}
                className={classes.asideCard}
              />
            </Grid>
            <Grid item xs={7}>
              <Table data={productState.product.attributes} show={11} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ProductCarusel
            list={productState.similiarProducts}
            title={lang.similiarProducts}
            basket={basket}
            onToggleBasket={(product) => toggleBasket(product)}
          />
        </Grid>
      </Grid>
    </section>
  );
};

const mapStateToProps = (state: IAppState) => ({
  productState: state.product,
  basket: state.header.basket,
  services: state.mainPage.services,
});

export default connect(mapStateToProps, { ...productPageActions, toggleBasket, getServices })(Product);
