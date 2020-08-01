import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./price.style";
import { round } from "helpers";
import clsx from "clsx";

interface IClasses {
  discount?: string;
  price?: string;
  root?: string;
}

export interface IPrice {
  price: number;
  discount: number;
  isList: boolean;
  className?: string;
  classes?: IClasses;
}

export const Price: FC<IPrice> = ({ discount, price, isList, className, classes }) => {
  const styles = useStyles();

  return (
    <span className={clsx(styles.priceContainer, isList && styles.listPrice, className, classes?.root)}>
      {discount > 0 && (
        <span className={clsx(styles.discountPrice, classes?.discount)}>
          <span>{price}</span>
          <span className={styles.money}>M</span>
        </span>
      )}
      <span className={clsx(styles.currentPrice, classes?.price)}>
        <span>{round(price - discount)}</span>
        <span className={styles.money}>M</span>
      </span>
    </span>
  );
};
