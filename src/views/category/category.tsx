import { Grid, withWidth, isWidthUp, Icon } from "@material-ui/core";
import { Card } from "components/shared";
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { ICategory } from "types";
import { useStyles } from "./category.style";
import { Aside } from "./components";
import { categoryActions } from "./store/action";
import { ICategoryState } from "./store/reducer";
import { IProduct, ICheckedAttribute, IProductPayload } from "./types";
import { FilterBar } from "./components";
import { IBasketProduct } from "components/layout/header/types";
import { toggleBasket } from "components/layout/header/store/action";
import { useParams } from "react-router-dom";
import { useTranslator } from "localization";
import { unlink } from "routes/makeLink";

export interface ICategoryPage {
  width: any;
  category: ICategoryState;
  categories: ICategory[];
  basket: IBasketProduct[];
  getProducts(payload: IProductPayload): void;
  getFilters(id: number): void;
  togglePrice(price: number[]): void;
  toggleAttribute(attributes: ICheckedAttribute[]): void;
  clearSearchFilters(): void;
  toggleViewMode(isApp: boolean): void;
  toggleBasket(product: IBasketProduct): void;
}

const Category: FC<ICategoryPage> = ({
  width,
  getProducts,
  category,
  basket,
  categories,
  getFilters,
  togglePrice,
  toggleAttribute,
  clearSearchFilters,
  toggleViewMode,
  toggleBasket,
}) => {
  const classes = useStyles();
  const params: any = useParams();
  const lang = useTranslator();

  const queryString = params.category;

  const categ = categories.filter((c) => c.name.toLowerCase() === unlink(queryString))[0];

  useEffect(() => {
    if (categ) {
      getProducts({ categId: categ.id, limit: 10, offset: 0 });
      getFilters(categ.id);
    }
  }, [params, getProducts, getFilters, categ.id]);

  useEffect(() => {
    return () => {
      clearSearchFilters();
    };
  }, [params, clearSearchFilters]);

  useEffect(() => {
    getProducts({ categId: categ.id, filters: category.searchFilter, limit: 10, offset: 0 });
  }, [category.searchFilter, getProducts, categ.id]);

  const handleAttributeSelect = (attrs: ICheckedAttribute[]) => {
    toggleAttribute(attrs);
  };

  const handlePriceChange = (price: number[]) => {
    togglePrice(price);
  };

  return (
    <section>
      <Grid container className={classes.container}>
        {isWidthUp("sm", width) && (
          <Grid item xs={3}>
            <Aside
              fields={category.filterFields}
              header={params?.category}
              defaultAttributes={category.searchFilter.attributes || []}
              onAttrSelect={handleAttributeSelect}
              onPriceChange={handlePriceChange}
              defaultPrice={category.searchFilter.price}
            />
          </Grid>
        )}
        <Grid item xs={isWidthUp("sm", width) ? 9 : 12} className={classes.cardContainer}>
          {category.products.length > 0 ? (
            <>
              <Grid item xs={12}>
                {isWidthUp("sm", width) ? (
                  <FilterBar
                    onChipClose={handleAttributeSelect}
                    fields={category.filterFields}
                    attributes={category.searchFilter.attributes}
                    onChange={(mode) => toggleViewMode(mode)}
                    isApp={category.viewModeisApp}
                  />
                ) : (
                  <div>
                    <Icon>{categ.icon}</Icon> {categ.name}
                  </div>
                )}
              </Grid>
              <Grid container>
                {category.products.map((product: IProduct, index: number) => (
                  <Grid key={index} item xs={12} md={category.viewModeisApp ? 4 : 12}>
                    <Card
                      item={product}
                      onToggleBasket={(product) => toggleBasket(product)}
                      inBasket={basket.some((p) => p.id === product.id)}
                      list={!category.viewModeisApp}
                      className={classes.categoryCard}
                    />
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <Grid item xs={12} className={classes.noItem}>
              {lang.noProductInThisCategory}
            </Grid>
          )}
        </Grid>
      </Grid>
    </section>
  );
};

const mapStateToProps = (state: IAppState) => ({
  category: state.category,
  categories: state.layout.categories,
  basket: state.header.basket,
});
export default connect(mapStateToProps, { ...categoryActions, toggleBasket })(withWidth()(Category));
