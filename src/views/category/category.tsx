import { Grid, IconButton } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import ViewListIcon from "@material-ui/icons/ViewList";
import clsx from "clsx";
import { Card } from "components/shared";
import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IAppState } from "store/reducers";
import { ICategory, IFilterField, IProduct } from "types";
import { useStyles } from "./category.style";
import { Aside } from "./components";
import { categoryActions } from "./store/action";
import brands from "data/brands.json";
import productList from "data/products.json";

export interface ICategoryPage {
  match: any;
  products: IProduct[];
  categories: ICategory[];
  getProducts(id: number): void;
}

const Category: FC<ICategoryPage> = ({ match, getProducts, products, categories }) => {
  const classes = useStyles();
  const [isApp, setViewMode] = useState(true);

  useEffect(() => {
    const queryString = match.params?.category;
    const categId = categories.filter((c) => c.name.toLowerCase() === queryString.replace("-", " ").toLowerCase())[0]
      ?.id;

    getProducts(categId);
    console.log(products);
  }, []);

  const renderCards = () => {
    return (
      <Grid container>
        {products.map((product: IProduct) => (
          <Grid key={product.id} item xs={12} md={!isApp ? 3 : 12}>
            <Card item={product} list={isApp} />
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderFilterBar = () => {
    return (
      <Grid item xs={12} className={classes.filterBar}>
        <div></div>
        <div>
          <IconButton onClick={() => setViewMode(true)} className={clsx(isApp && classes.activeViewMode)}>
            <AppsIcon />
          </IconButton>
          <IconButton onClick={() => setViewMode(false)} className={clsx(!isApp && classes.activeViewMode)}>
            <ViewListIcon />
          </IconButton>
        </div>
      </Grid>
    );
  };

  const handleAttributeSelect = () => {};
  const handleBrandSelect = () => {};
  const handlePriceSelect = () => {};

  // from back
  const findFilters = (filter: "brands" | "attributes") => {
    const queryString = match.params?.category;
    const categId = categories.filter((c) => c.name.toLowerCase() === queryString.replace("-", " ").toLowerCase())[0]
      ?.id;

    const categProducts = productList.filter((p: any) => p.categoryId === categId);

    const brandList: IFilterField[] = [];
    // const attrList: IFilterField[] = [];

    for (let brand of brands) {
      brandList.push({
        name: brand.name,
        count: categProducts.filter((cp: any) => cp.brandId === brand.id).length,
      });
    }

    for (let brand of brands) {
      brandList.push({
        name: brand.name,
        count: categProducts.filter((cp: any) => cp.brandId === brand.id).length,
      });
    }

    // for (let attr of attributes) {
    //   attrList.push({
    //     name: attr.name,
    //     count: categProducts.filter((cp) => cp.brandId === brand.id).length,
    //   });
    // }

    return filter === "brands" ? brandList : [];
  };

  return (
    <Grid container className={classes.container}>
      {products.length > 0 ? (
        <>
          <Grid item xs={3}>
            <Aside
              attributes={findFilters("brands")}
              brands={findFilters("brands")}
              onAttrSelect={handleAttributeSelect}
              onBrandSelect={handleBrandSelect}
              onPriceSelect={handlePriceSelect}
            />
          </Grid>
          <Grid item xs={9} className={classes.cardContainer}>
            {renderFilterBar()}
            {renderCards()}
          </Grid>
        </>
      ) : (
        <Grid item xs={12} className={classes.noItem}>
          Teesufki bu kateqoriyada heleki mal yoxdur
        </Grid>
      )}
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  products: state.category.products,
  categories: state.layout.category,
});
export default withRouter(connect(mapStateToProps, categoryActions)(Category));
