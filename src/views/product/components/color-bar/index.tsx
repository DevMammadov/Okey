import React, { FC } from "react";
import { IColor } from "types";
import { useStyles } from "./color-bar.style";
import { IconButton } from "@material-ui/core";
import clsx from "clsx";

export interface IColorBar {
  colors: IColor[];
  onSelect(color: IColor): void;
  selected: number;
}

export const ColorBar: FC<IColorBar> = ({ colors, onSelect, selected }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {colors.map((color: IColor) => (
        <IconButton
          style={{ backgroundColor: color.code }}
          key={color.id}
          onClick={() => onSelect(color)}
          className={clsx(classes.color, color.id === selected && classes.selected)}
        ></IconButton>
      ))}
    </div>
  );
};
