import React, { FC } from "react";
import { Grid, IconButton, Paper, Chip, Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import ViewListIcon from "@material-ui/icons/ViewList";
import { useStyles } from "./filter-bar.style";
import clsx from "clsx";
import { ICheckedAttribute, IFilterField } from "views/category/types";
import { stringCutter } from "helpers";

export interface IFilterBar {
  onChange(isApp: boolean): void;
  isApp: boolean;
  attributes: ICheckedAttribute[];
  fields: IFilterField;
  onChipClose(attributes: ICheckedAttribute[]): void;
}

export const FilterBar: FC<IFilterBar> = ({ onChange, isApp, onChipClose, attributes, fields }) => {
  const classes = useStyles();

  const handleDelete = (valueId: number, attributeId: number) => {
    let removeChecked = attributes.filter((ch) => ch.attributeId !== attributeId || ch.valueId !== valueId);
    onChipClose([...removeChecked]);
  };

  return (
    <Paper className={classes.filterBar}>
      <div className={classes.chipContainer}>
        {attributes?.map((attr, index) => (
          <Chip
            key={index}
            avatar={
              <Avatar>
                {fields?.attributes
                  ?.filter((a) => a.attributeId === attr.attributeId)[0]
                  ?.values.filter((v) => v.valueId === attr.valueId)[0]
                  ?.value[0].toUpperCase()}
              </Avatar>
            }
            label={stringCutter(
              fields?.attributes
                ?.filter((a) => a.attributeId === attr.attributeId)[0]
                ?.values.filter((v) => v.valueId === attr.valueId)[0]?.value,
              20
            )}
            onDelete={() => handleDelete(attr.valueId, attr.attributeId)}
            color="primary"
            size="small"
            className={classes.chip}
          />
        ))}
      </div>
      <div>
        <IconButton onClick={() => onChange(true)} className={clsx(isApp && classes.activeViewMode)}>
          <AppsIcon />
        </IconButton>
        <IconButton onClick={() => onChange(false)} className={clsx(!isApp && classes.activeViewMode)}>
          <ViewListIcon />
        </IconButton>
      </div>
    </Paper>
  );
};
