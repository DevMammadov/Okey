import { Grid } from "@material-ui/core";
import { Card } from "components/shared";
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
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

export interface ICategoryPage {
  match: any;
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
  match,
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
  const queryString = match.params?.category;
  const categId = categories.filter((c) => c.name.toLowerCase() === queryString.replace("-", " ").toLowerCase())[0]?.id;

  useEffect(() => {
    if (categId) {
      getProducts({ categId: categId, limit: 10, offset: 0 });
      getFilters(categId);
    }
  }, [match.params, getProducts]);

  useEffect(() => {
    return () => {
      clearSearchFilters();
    };
  }, [match.params, clearSearchFilters]);

  useEffect(() => {
    getProducts({ categId: categId, filters: category.searchFilter, limit: 10, offset: 0 });
  }, [category.searchFilter, getProducts]);

  const handleAttributeSelect = (attrs: ICheckedAttribute[]) => {
    toggleAttribute(attrs);
  };

  const handlePriceChange = (price: number[]) => {
    togglePrice(price);
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={3}>
        <Aside
          fields={category.filterFields}
          categName={match.params?.category}
          defaultAttributes={category.searchFilter.attributes || []}
          onAttrSelect={handleAttributeSelect}
          onPriceChange={handlePriceChange}
          defaultPrice={category.searchFilter.price}
        />
      </Grid>
      <Grid item xs={9} className={classes.cardContainer}>
        {category.products.length > 0 ? (
          <>
            <FilterBar
              onChipClose={handleAttributeSelect}
              fields={category.filterFields}
              attributes={category.searchFilter.attributes}
              onChange={(mode) => toggleViewMode(mode)}
              isApp={category.viewModeisApp}
            />
            <Grid container>
              {category.products.map((product: IProduct, index: number) => (
                <Grid key={index} item xs={12} md={category.viewModeisApp ? 3 : 12}>
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
            Teesufki bu kateqoriyada heleki mal yoxdur
          </Grid>
        )}
      </Grid>
      )}
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  category: state.category,
  categories: state.layout.category,
  basket: state.header.basket,
});
export default withRouter(connect(mapStateToProps, { ...categoryActions, toggleBasket })(Category));
