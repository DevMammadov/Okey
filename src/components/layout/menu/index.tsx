import React, { FC, useState, useMemo } from "react";
import { useStyles } from "./menu.style";
import {
  Grid,
  Icon,
  Paper,
  List,
  ListItem,
  Collapse,
  withWidth,
  isWidthUp,
  SwipeableDrawer,
  IconButton,
} from "@material-ui/core";
import { ICategoryList } from "types";
import { useHistory, useLocation } from "react-router-dom";
import { createLink } from "routes/makeLink";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";

interface IMenuPros {
  categoryList: ICategoryList[];
  width: any;
}

const Menu: FC<IMenuPros> = ({ categoryList, width }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [MobileOpen, setMobileOpen] = useState(false);
  const menuTabCount = useMemo(
    () =>
      categoryList?.filter((c) => c.groupName)?.length + categoryList?.filter((c) => !c.groupName)[0]?.categs?.length,
    [categoryList]
  );

  console.log(menuTabCount);

  const isActive = (path: string) => location.pathname === createLink(path);

  const handleClick = (path: string) => {
    history.push(createLink(path));
    setMobileOpen(false);
  };

  const renderList = (isMobile: boolean) => {
    return (
      <List className={clsx(isMobile ? classes.verticalList : classes.flatList)}>
        <ListItem
          className={clsx(classes.listItem, isActive("") && classes.activeItem)}
          button
          onClick={() => handleClick("")}
        >
          <Icon className={classes.icon}>home</Icon>
          <span>Ana sehife</span>
        </ListItem>
        {categoryList.map((listItem: ICategoryList, index: number) =>
          !listItem?.groupName ? (
            listItem?.categs?.map((category) => (
              <ListItem
                className={clsx(classes.listItem, isActive(category.name) && classes.activeItem)}
                button
                onClick={() => handleClick(category.name)}
                key={category.id}
              >
                {category.icon && <Icon className={classes.icon}>{category.icon}</Icon>}
                <span>{category.name}</span>
              </ListItem>
            ))
          ) : (
            <ListItem className={classes.listItem} key={index}>
              {listItem.icon && <Icon className={classes.icon}>{listItem.icon}</Icon>}
              <span>{listItem.groupName}</span>
              <List component={Paper} className={classes.subList}>
                {listItem.categs.map((subCateg) => (
                  <ListItem
                    className={clsx(classes.listItem, isActive(subCateg.name) && classes.activeItem)}
                    button
                    onClick={() => handleClick(subCateg.name)}
                    key={subCateg.id}
                  >
                    {subCateg.icon && <Icon className={classes.icon}>{subCateg.icon}</Icon>}
                    <span>{subCateg.name}</span>
                  </ListItem>
                ))}
              </List>
            </ListItem>
          )
        )}
      </List>
    );
  };

  const webVersion = () => {
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={clsx(classes.container, menuTabCount > 5 && classes.hideOverflow)}>
          {renderList(false)}
        </Grid>
      </Grid>
    );
  };

  const mobileVersion = () => {
    return (
      <>
        <IconButton onClick={() => setMobileOpen(true)}>
          <MenuIcon className={classes.hamburgerIcon} fontSize="large" />
        </IconButton>
        <SwipeableDrawer
          anchor="bottom"
          open={MobileOpen}
          onClose={() => setMobileOpen(false)}
          onOpen={() => setMobileOpen(true)}
          classes={{ paper: classes.drawerPaper }}
        >
          {renderList(true)}
        </SwipeableDrawer>
      </>
    );
  };

  return isWidthUp("sm", width) ? webVersion() : mobileVersion();
};

export default withWidth()(Menu);
