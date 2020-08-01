import React, { useState, MouseEvent, FC } from "react";
import { Badge, Button, Menu, Icon, ListSubheader, MenuItem } from "@material-ui/core";
import { useStyles } from "./context-menu.style";
import withWidth, { isWidthUp, WithWidthProps } from "@material-ui/core/withWidth";
import { IBasketProduct } from "../../types";
import { useTranslator } from "localization";
import { round } from "helpers";

export interface IContextMenu extends WithWidthProps {
  icon?: string;
  onOpen?(): void;
  openBasket?(): void;
  onOrder?(): void;
  list: IBasketProduct[];
  className?: string;
  style?: any;
  buttonText?: string;
  width: any;
}

const ContextMenu: FC<IContextMenu> = ({
  icon,
  list,
  className,
  style,
  buttonText,
  onOpen = () => {},
  openBasket = () => {},
  onOrder = () => {},
  width,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();
  const lang = useTranslator("header");

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (isWidthUp("sm", width)) {
      setAnchorEl(event.currentTarget);
    } else {
      onOpen();
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderList = (list: IBasketProduct[]) => {
    return list?.map((product: IBasketProduct) => (
      <MenuItem key={product.id}>
        <img src={product.image} alt={product.name} />
        <div>
          <span>{product.name}</span>
          <div>
            <b>
              {product.count} x {product.price} <span className={classes.money}> M</span>
            </b>
          </div>
        </div>
      </MenuItem>
    ));
  };

  const renderOpenButton = () => {
    return (
      <div className={classes.listFooter}>
        <Button variant="contained" onClick={onOrder}>
          <Icon>local_mall</Icon>
          {buttonText ? buttonText : lang.complateOrder}
        </Button>
        <Button onClick={openBasket} color="primary">
          <Icon>shopping_cart</Icon>
          {buttonText ? buttonText : lang.gotToBasket}
        </Button>
      </div>
    );
  };

  return (
    <div className={className} style={style}>
      <Button aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick} className={classes.button}>
        <Badge badgeContent={list.length || 0} color="secondary" invisible={!list.length}>
          <Icon fontSize={isWidthUp("sm", width) ? "large" : "default"}>{icon ? icon : "favorite"}</Icon>
        </Badge>
      </Button>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{ paper: classes.menu }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <ListSubheader className={classes.listHeader}>
          <span>
            {lang.countOfProductInBasket} <b>{list.length}</b>
          </span>
          <span>
            {" "}
            {lang.totalCount}{" "}
            <b>
              {round(list.map((p) => p.price * p.count).reduce((acc, curr) => acc + curr, 0))}{" "}
              <span className={classes.money}>M</span>
            </b>
          </span>
        </ListSubheader>
        {renderList(list)}
        {list.length === 0 && (
          <div className={classes.noItem}>
            <div className={classes.noItemIcon}>
              <Icon>sentiment_dissatisfied</Icon>
            </div>
            <div>{lang.noProductInBasket}</div>
          </div>
        )}
        {list.length > 0 && renderOpenButton()}
      </Menu>
    </div>
  );
};

export default withWidth()(ContextMenu);
