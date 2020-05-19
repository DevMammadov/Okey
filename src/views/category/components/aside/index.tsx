import React, { FC } from "react";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useStyles } from "./aside.style";
import { IFilterField } from "types";

export interface ICategoryAside {
  attributes: IFilterField[];
  brands: IFilterField[];
  onBrandSelect(brandId: number): void;
  onAttrSelect(attrId: number): void;
  onPriceSelect(start: number, end: number): void;
}

export const Aside: FC<ICategoryAside> = ({}) => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          PowerBanks
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};
