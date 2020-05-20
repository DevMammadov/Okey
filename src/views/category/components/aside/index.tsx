import React, { FC } from "react";
import { List, ListSubheader, ListItem, ListItemText, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useStyles } from "./aside.style";
import { IFilterField, IValue } from "../../types";
import { CheckBox } from "../checkbox";

export interface ICategoryAside {
  attributes: IFilterField[];
  categName: string[];
  onBrandSelect(brandId: number): void;
  onAttrSelect(attrId: number): void;
  onPriceSelect(start: number, end: number): void;
}

export const Aside: FC<ICategoryAside> = ({ attributes, categName, onAttrSelect, onBrandSelect, onPriceSelect }) => {
  const [closedList, setClosed] = React.useState<string[]>([]);
  const [checkedList, setChecked] = React.useState<{ val: string; attr: string }[]>([]);
  const classes = useStyles();

  const handleCollapse = (attr: string) => {
    if (closedList.includes(attr)) {
      let removeAttr = closedList.filter((c) => c !== attr);
      setClosed([...removeAttr]);
    } else {
      setClosed([...closedList, attr]);
    }
  };

  const handleCheckBoxCheck = (val: string, attr: string) => {
    if (checkedList.some((cl) => cl.val === val && cl.attr === attr)) {
      let removeChecked = checkedList.filter((ch) => ch.attr !== val && ch.val !== val);
      setChecked([...removeChecked]);
    } else {
      setChecked([...checkedList, { val, attr }]);
    }
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {categName}
        </ListSubheader>
      }
      className={classes.root}
    >
      {attributes.map((attr: IFilterField, index: number) => (
        <div key={index}>
          <ListItem button onClick={() => handleCollapse(attr.attribute)}>
            <ListItemText primary={attr.attribute} />
            {!closedList.includes(attr.attribute) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {attr.values.map((val: IValue, index: number) => (
            <Collapse key={index} in={!closedList.includes(attr.attribute)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nested}>
                  <CheckBox
                    onChange={() => handleCheckBoxCheck(val.value, attr.attribute)}
                    label={val.value}
                    checked={checkedList.some((cl) => cl.val === val.value && cl.attr === attr.attribute)}
                    tabIndex={-1}
                    disableRipple
                    color="primary"
                  />
                  <ListItemText primary={val.count} />
                </ListItem>
              </List>
            </Collapse>
          ))}
        </div>
      ))}
    </List>
  );
};
