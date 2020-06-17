import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./price.style";
import clsx from "clsx";

export interface IPrice {
  price: number;
  discount: number;
  isList: boolean;
}

export const Price: FC<IPrice> = ({ discount, price, isList }) => {
  const classes = useStyles();

  const round = (number: number) => {
    return Math.round((number + Number.EPSILON) * 100) / 100;
  };

  return (
    <Typography component="div" className={clsx(classes.priceContainer, isList && classes.listPrice)}>
      {discount > 0 && (
        <div className={classes.originalPrice}>
          <span>{price}</span>
          <span className={classes.money}>M</span>
        </div>
      )}
      <div className={classes.currentPrice}>
        <span>{round(price - discount)}</span>
        <span className={classes.money}>M</span>
      </div>
    </Typography>
  );
};
