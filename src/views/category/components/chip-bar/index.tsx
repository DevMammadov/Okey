import React, { FC } from "react";
import { Grid, Chip, Avatar, Paper } from "@material-ui/core";
import { ICheckedAttribute, IFilterField } from "views/category/types";
import { stringCutter } from "helpers";
import { useStyles } from "./chip-bar.style";

export interface IChipBar {
  onClose(attributes: ICheckedAttribute[]): void;
  attributes: ICheckedAttribute[];
  fields: IFilterField;
}

export const ChipBar: FC<IChipBar> = ({ attributes, onClose, fields }) => {
  const classes = useStyles();

  const handleDelete = (valueId: number, attributeId: number) => {
    if (attributes.some((cl) => cl.valueId === valueId && cl.attributeId === attributeId)) {
      let removeChecked = attributes.filter((ch) => ch.attributeId !== attributeId || ch.valueId !== valueId);
      onClose([...removeChecked]);
    } else {
      onClose([...attributes, { valueId, attributeId }]);
    }
  };

  return (
    <Grid item xs={12} className={classes.chipContainer}>
      <Paper className={classes.chipBar}>
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
          />
        ))}
      </Paper>
    </Grid>
  );
};
