import React, { FC } from "react";
import { useStyles } from "./basket-table";
import { useTranslator } from "localization";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
} from "@material-ui/core";
import { IBasketProduct } from "components/layout/header/types";
import { Counter } from "components/shared";
import { round } from "helpers";
import DeleteIcon from "@material-ui/icons/Delete";

export interface IProductCount {
  id: number;
  count: number;
}

export interface IBasketTable {
  data: IBasketProduct[];
  onCountChange(data: IProductCount): void;
}

export const BasketTable: FC<IBasketTable> = ({ data, onCountChange }) => {
  const lang = useTranslator("basket");
  const classes = useStyles();

  const handleRemove = (id: number) => {};

  return (
    <TableContainer className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{lang.imageOf}</TableCell>
            <TableCell align="left">{lang.nameOf}</TableCell>
            <TableCell align="left">{lang.countOf}</TableCell>
            <TableCell align="left">{lang.priceOf}</TableCell>
            <TableCell align="left">{lang.totalCount}</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((product: IBasketProduct) => (
            <TableRow key={product.id}>
              <TableCell className={classes.imageCell}>
                <img src={product.image} draggable={false} alt="" className={classes.image} />
              </TableCell>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="left">
                <Counter
                  onChange={(val: number) => onCountChange({ count: val, id: product.id })}
                  value={product.count}
                />
              </TableCell>
              <TableCell align="left">
                {product.price} <span className={classes.money}>M</span>
              </TableCell>
              <TableCell align="left">
                {round(product.count * product.price)} <span className={classes.money}>M</span>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleRemove(product.id)} className={classes.removeButton}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
