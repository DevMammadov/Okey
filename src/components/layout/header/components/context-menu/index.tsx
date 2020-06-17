import React, { useState, MouseEvent, FC } from "react";
import { Badge, Button, Menu, Icon } from "@material-ui/core";
import { CustomItem } from "./styled-components";
import { useStyles } from "./context-menu.style";
import { IGood, IImages } from "types";
import withWidth, { isWidthUp, WithWidthProps } from "@material-ui/core/withWidth";
// TODO: will be removed
import imageList from "data/images.json";
import logo from "dist/smallLogo.png";

export interface IContextMenu extends WithWidthProps {
  icon?: string;
  onOpen(): void;
  list: IGood[];
  className?: string;
  style?: any;
  buttonText?: string;
  width: any;
}

const ContextMenu: FC<IContextMenu> = ({ icon, list, className, style, buttonText, onOpen, width }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();

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

  // TODO: Well be removed!
  const scrapImage = (id: number) => {
    return imageList.filter((img: IImages) => img.productId === id)[0].name || logo;
  };

  const renderList = (list: IGood[]) => {
    return list.map((goods: IGood) => <CustomItem key={goods.id} img={scrapImage(goods.id)} text={goods.name} />);
  };

  const renderOpenButton = () => {
    return (
      <CustomItem className={classes.buttonItem}>
        <Button onClick={onOpen} color="primary">
          {buttonText ? buttonText : "Siyahıya keç"}
        </Button>
      </CustomItem>
    );
  };

  const renderBadge = () => {
    //console.log(list.length);
    return (
      <Badge badgeContent={list.length || 0} color="secondary" invisible={!list.length}>
        <Icon fontSize={isWidthUp("sm", width) ? "large" : "default"}>{icon ? icon : "favorite"}</Icon>
      </Badge>
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
        {renderBadge()}
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
        {renderList(list)}
        {renderOpenButton()}
      </Menu>
    </div>
  );
};

export default withWidth()(ContextMenu);
