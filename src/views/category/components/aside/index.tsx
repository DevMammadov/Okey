import React, { FC } from "react";
import { List, ListSubheader, ListItem, ListItemText, Collapse, Paper } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useStyles } from "./aside.style";
import { IFilterField, IValue, IFilterAttribute, ICheckedAttribute } from "../../types";
import { CheckBox } from "../checkbox";
import { stringCutter } from "helpers";
import { PriceFilter } from "../price-filter";

export interface ICategoryAside {
  categName: string;
  onAttrSelect(attributes: ICheckedAttribute[]): void;
  onPriceChange(price: number[]): void;
  fields: IFilterField;
  defaultPrice: number[];
  defaultAttributes: ICheckedAttribute[];
}

export const Aside: FC<ICategoryAside> = ({
  categName,
  onAttrSelect,
  onPriceChange,
  fields,
  defaultPrice,
  defaultAttributes,
}) => {
  const [closedList, setClosed] = React.useState<string[]>([]);
  const classes = useStyles();

  const handleCollapse = (attr: string) => {
    if (closedList.includes(attr)) {
      let removeAttr = closedList.filter((c) => c !== attr);
      setClosed([...removeAttr]);
    } else {
      setClosed([...closedList, attr]);
    }
  };

  const handleCheckBoxCheck = (valueId: number, attributeId: number) => {
    if (defaultAttributes.some((cl) => cl.valueId === valueId && cl.attributeId === attributeId)) {
      let removeChecked = defaultAttributes.filter((ch) => ch.attributeId !== attributeId || ch.valueId !== valueId);
      onAttrSelect([...removeChecked]);
    } else {
      onAttrSelect([...defaultAttributes, { valueId, attributeId }]);
    }
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {categName.replace("-", " ")}
        </ListSubheader>
      }
      className={classes.root}
    >
      <Paper className={classes.CollapseItem}>
        <ListItem className={classes.listHeader} button onClick={() => handleCollapse("Qiymet")}>
          <ListItemText primary="Qiymet" />
          {!closedList.includes("Qiymet") ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={!closedList.includes("Qiymet")} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={classes.nestedList}>
            <ListItem>
              <PriceFilter
                defaultValue={defaultPrice}
                onChange={(price) => onPriceChange(price)}
                price={fields.price}
              />
            </ListItem>
          </List>
        </Collapse>
      </Paper>
      {fields.attributes?.map((attr: IFilterAttribute, index: number) => (
        <Paper className={classes.CollapseItem} key={index}>
          <ListItem className={classes.listHeader} button onClick={() => handleCollapse(attr.attribute)}>
            <ListItemText primary={attr.attribute} />
            {!closedList.includes(attr.attribute) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={!closedList.includes(attr.attribute)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className={classes.nestedList}>
              {attr.values.map((val: IValue, index: number) => (
                <ListItem key={index}>
                  <CheckBox
                    onChange={() => handleCheckBoxCheck(val.valueId, attr.attributeId)}
                    label={stringCutter(val.value, 32)}
                    checked={defaultAttributes.some(
                      (cl) => cl.valueId === val.valueId && cl.attributeId === attr.attributeId
                    )}
                    tabIndex={-1}
                    className={classes.filterCheckbox}
                    labelClass={classes.checkBoxLabel}
                    disableRipple
                    color="primary"
                  />
                  <div className={classes.countBadge}>
                    <span>{val.count} </span>
                  </div>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Paper>
      ))}
    </List>
  );
};
