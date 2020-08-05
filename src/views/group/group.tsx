import React, { FC, useEffect } from "react";
import { IAppState } from "store/reducers";
import { connect } from "react-redux";
import { groupPageActions } from "./store/action";
import { Grid, isWidthUp, withWidth } from "@material-ui/core";
import { useStyles } from "./group.style";
import { IProduct } from "views/category/types";
import { Card } from "components/shared";
import { IBasketProduct } from "components/layout/header/types";
import { IGroupState } from "./store/reducer";
import { toggleBasket } from "components/layout/header/store/action";
import { useParams, useHistory } from "react-router-dom";
import { unlink, createLink } from "routes/makeLink";
import { IGroupResponsePayload, IGroupFilter } from "./types";
import { FilterBar } from "./components/filter-bar";
import { useTranslator } from "localization";
import Pagination from "@material-ui/lab/Pagination";

export interface IGroup {
  width: any;
  group: IGroupState;
  basket: IBasketProduct[];
  getGroupResponse(data: IGroupResponsePayload): void;
  toggleBasket(product: IBasketProduct): void;
  setFilter(filter: IGroupFilter): void;
}

const Group: FC<IGroup> = ({ width, group, basket, toggleBasket, getGroupResponse, setFilter }) => {
  const classes = useStyles();
  const params: any = useParams();
  const lang = useTranslator("group");
  const history = useHistory();

  useEffect(() => {
    if (params.root === "search") {
      getGroupResponse({
        categ: unlink(params.categ),
        search: params.search,
        cheapFirst: group.filter.cheapFirst,
        page: params.page,
      });
    }
  }, [params, group.filter.cheapFirst]);

  const handleCategChange = (categ: string) => {
    history.push(`/search${createLink(categ)}/${params.search}`);
    setFilter({ ...group.filter, categ });
  };

  const toggleView = (viewModeisApp: boolean) => {
    if (viewModeisApp !== group.filter.viewModeisApp) {
      setFilter({ ...group.filter, viewModeisApp });
    }
  };

  const handleCheapFilterChange = (cheapFirst: boolean) => {
    setFilter({ ...group.filter, cheapFirst });
  };

  const handlePaging = (e: any, page: number) => {
    setFilter({ ...group.filter, page });
    history.push(`/search${createLink(group.filter.categ)}/${params.search}/${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <FilterBar
            categList={group.response.categs}
            selectedCateg={group.filter.categ}
            isApp={group.filter.viewModeisApp}
            onCategChange={handleCategChange}
            onChangeViewMode={toggleView}
            cheapFirst={group.filter.cheapFirst}
            onCheapFilterChange={handleCheapFilterChange}
            disableFilter={!params.search?.length || params.search?.length === 0}
          />
        </Grid>
        <Grid item xs={12}>
          {params.search?.length > 0 ? (
            <div className={classes.resultText}>
              <span className={classes.searchText}>"{params.search}"</span> {lang.similiarToWord}{" "}
              {group.response.resultCount} {lang.findedResult}
            </div>
          ) : (
            <div className={classes.emptyRequest}>{lang.typeSearchWord}</div>
          )}
        </Grid>
        {group.response?.products?.length > 0 && (
          <Grid item xs={12} className={classes.cardContainer}>
            <Grid container>
              {group.response?.products?.map((product: IProduct, index: number) => (
                <Grid key={index} item xs={12} md={group.filter.viewModeisApp ? 3 : 12}>
                  <Card
                    item={product}
                    onToggleBasket={(product) => toggleBasket(product)}
                    inBasket={basket.some((p) => p.id === product.id)}
                    list={!group.filter.viewModeisApp}
                    className={classes.categoryCard}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
        {group.response.productCount > group.filter.offset && (
          <Grid item xs={12} className={classes.pagingContainer}>
            <Pagination
              count={Math.ceil(group.response.productCount / group.filter.offset)}
              onChange={handlePaging}
              page={group.filter.page}
              shape="rounded"
              variant="outlined"
              classes={{ ul: classes.pagingUl }}
            />
          </Grid>
        )}
      </Grid>
    </section>
  );
};

const mapStateToProps = (state: IAppState) => ({ group: state.group, basket: state.header.basket });
export default connect(mapStateToProps, { ...groupPageActions, toggleBasket })(withWidth()(Group));
