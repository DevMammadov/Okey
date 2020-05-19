import React, { FC, useState } from "react";
import { Grid, Collapse, Icon } from "@material-ui/core";
import { useStyles } from "./header.style";
import bigLogoBorderLess from "dist/BigBorderLess.png";
import logoBorderLess from "dist/okeySmallBorderLess.jpg";
import { ContextMenu, SearchBar } from "./components";
import goodList from "data/goodList.json";
import withWidth, {
  isWidthUp,
  WithWidthProps,
} from "@material-ui/core/withWidth";
import { Link } from "react-router-dom";

interface IHeader extends WithWidthProps {
  width: any;
}

const Header: FC<IHeader> = ({ width }) => {
  const classes = useStyles();
  const [visible, setVisible] = useState<boolean>(false);

  const handleFavoriteOpen = () => {
    console.log("open favorities");
  };

  const handleBasketOpen = () => {
    console.log("open basket");
  };

  const handleSrachShow = () => {
    setVisible(!visible);
  };

  const renderLogo = () => {
    return (
      <Link to="/">
        <img
          src={isWidthUp("sm", width) ? bigLogoBorderLess : logoBorderLess}
          alt="logo"
          className={classes.logo}
        />
      </Link>
    );
  };

  const renderInfoBar = () => {
    if (isWidthUp("md", width)) {
      return (
        <div className={classes.infoBar}>
          <span>
            <Icon fontSize="small">location_on</Icon> 40 İnşaatçılar prospekti,
            Bakı 1065
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
            <SearchBar onIconClick={handleSrachShow} />
          </div>
          <div className={classes.icons}>
            <ContextMenu
              icon="favorite"
              list={goodList}
              onOpen={handleFavoriteOpen}
            />
            <ContextMenu
              icon="shopping_basket"
              list={goodList}
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

export default withWidth()(Header);
