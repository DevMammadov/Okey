import React, { FC } from "react";
import { IAttribute } from "views/category/types";
import { TableContainer, TableBody, TableRow, TableCell } from "@material-ui/core";
import { useStyles } from "./attributes.style";

export interface IAttributes {
  list: IAttribute[];
}

export const Attributes: FC<IAttributes> = ({ list }) => {
  const classes = useStyles();

  const sliceArray = (start: number, end: number, arr: any[] | undefined) => {
    if (arr && arr.length > end) {
      return arr.slice(start, end);
    }
    return arr || [];
  };

  return (
    <TableContainer component="table" className={classes.attributeTable}>
      <TableBody>
        {sliceArray(0, 5, list).map((v: IAttribute, i: number) => (
          <TableRow key={i}>
            <TableCell>{v.name}</TableCell>
            <TableCell>{v.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};
