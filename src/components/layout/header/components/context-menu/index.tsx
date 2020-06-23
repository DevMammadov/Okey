import React, { useState, MouseEvent, FC } from "react";
import { Badge, Button, Menu, Icon, ListSubheader } from "@material-ui/core";
import { CustomItem } from "./styled-components";
import { useStyles } from "./context-menu.style";
import withWidth, { isWidthUp, WithWidthProps } from "@material-ui/core/withWidth";
import { IBasketProduct } from "../../types";
import { useTranslator } from "localization";

export interface IContextMenu extends WithWidthProps {
  icon?: string;
  onOpen(): void;
  list: IBasketProduct[];
  className?: string;
  style?: any;
  buttonText?: string;
  width: any;
}

const ContextMenu: FC<IContextMenu> = ({ icon, list, className, style, buttonText, onOpen, width }) => {
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
      <CustomItem key={product.id} img={product.image} text={product.name} />
    ));
  };

  const renderOpenButton = () => {
    return (
      <div className={classes.listFooter}>
        <Button onClick={onOpen} color="primary">
          {buttonText ? buttonText : lang.complateOrder}
        </Button>
      </div>
    );
  };

  return (
    <div className={className} style={style}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
        className={classes.button}
      >
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
          <span>Səbətdə {list.length} mehsul var</span>
        </ListSubheader>
        {renderList(list)}
        {renderOpenButton()}
      </Menu>
    </div>
  );
};

export default withWidth()(ContextMenu);
