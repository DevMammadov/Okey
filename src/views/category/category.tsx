import { Grid, IconButton } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import ViewListIcon from "@material-ui/icons/ViewList";
import clsx from "clsx";
import { Card } from "components/shared";
import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { IAppState } from "store/reducers";
import { ICategory } from "types";
import { useStyles } from "./category.style";
import { Aside } from "./components";
import { categoryActions } from "./store/action";
import { ICategoryState } from "./store/reducer";
import { IProduct } from "./types";

export interface ICategoryPage {
  match: any;
  category: ICategoryState;
  categories: ICategory[];
  getProducts(id: number): void;
  getFilters(id: number): void;
}

const Category: FC<ICategoryPage> = ({ match, getProducts, category, categories, getFilters }) => {
  const classes = useStyles();
  const [isApp, setViewMode] = useState(true);

  useEffect(() => {
    const queryString = match.params?.category;
    const categId = categories.filter((c) => c.name.toLowerCase() === queryString.replace("-", " ").toLowerCase())[0]
      ?.id;

    getProducts(categId);
    getFilters(categId);
  }, [match.params?.category]);

  const renderCards = () => {
    return (
      <Grid container>
        {category.products.map((product: IProduct) => (
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

  return (
    <Grid container className={classes.container}>
      {category.products.length > 0 ? (
        <>
          <Grid item xs={3}>
            <Aside
              attributes={category.filterFields}
              categName={match.params?.category}
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
  category: state.category,
  categories: state.layout.category,
});
export default withRouter(connect(mapStateToProps, categoryActions)(Category));
