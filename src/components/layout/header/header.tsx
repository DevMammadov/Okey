import React, { FC, useState } from "react";
import { Grid, Collapse, Icon } from "@material-ui/core";
import { useStyles } from "./header.style";
import bigLogoBorderLess from "dist/BigBorderLess.png";
import logoBorderLess from "dist/okeySmallBorderLess.jpg";
import { ContextMenu, SearchBar } from "./components";
import withWidth, { isWidthUp, WithWidthProps } from "@material-ui/core/withWidth";
import { Link } from "react-router-dom";
import { IAppState } from "store/reducers";
import { connect } from "react-redux";
import { IHeaderState } from "./store/reducer";
import { headerActions } from "./store/action";
import { useHistory } from "react-router-dom";
import { links } from "routes/links";

interface IHeaderPage extends WithWidthProps {
  width: any;
  header: IHeaderState;
  searchGood(text: string): void;
}

const Header: FC<IHeaderPage> = ({ width, header, searchGood }) => {
  const classes = useStyles();
  const [visible, setVisible] = useState<boolean>(false);
  const history = useHistory();

  const handleBasketOpen = () => {
    console.log("open basket");
  };

  const handleSrachShow = () => {
    setVisible(!visible);
  };

  const renderLogo = () => {
    return (
      <Link to="/">
        <img src={isWidthUp("sm", width) ? bigLogoBorderLess : logoBorderLess} alt="logo" className={classes.logo} />
      </Link>
    );
  };

  const renderInfoBar = () => {
    if (isWidthUp("md", width)) {
      return (
        <div className={classes.infoBar}>
          <span>
            <Icon fontSize="small">location_on</Icon> 40 İnşaatçılar prospekti, Bakı 1065
          </span>
          <span>
            <Icon fontSize="small">phone_iphone</Icon> (+994) 55 888 88 88
          </span>
        </div>
      );
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.gridItem}>
        <div>{renderLogo()}</div>
        <div className={classes.headerContainer}>
          <div className={classes.searchContainer}>
            {renderInfoBar()}
            <SearchBar onIconClick={handleSrachShow} resultList={header.result} onSearch={(val) => searchGood(val)} />
          </div>
          <div className={classes.icons}>
            <ContextMenu
              icon="shopping_cart"
              list={header.basket}
              openBasket={() => history.push(links.basket.baseUrl)}
              onOpen={handleBasketOpen}
            />
          </div>
        </div>
      </Grid>
      <Collapse in={visible} style={{ width: "100%" }}>
        <Grid item xs={12} className={classes.gridItemSearch}>
          <SearchBar showOnMobile />
        </Grid>
      </Collapse>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ header: state.header });

export default connect(mapStateToProps, headerActions)(withWidth()(Header));
