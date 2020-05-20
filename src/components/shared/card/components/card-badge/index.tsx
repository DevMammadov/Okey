import React, { FC } from "react";
import { useStyles } from "./card-badge.style";
import clsx from "clsx";
import { translator } from "translation";
import { IProduct } from "views/category/types";

export interface ICardPadges {
  item: IProduct;
  className?: string;
}

export const CardBadge: FC<ICardPadges> = ({ item, className }) => {
  const classes = useStyles();
  const lang = translator().item;
  return (
    <div className={clsx(classes.badgeContainer, className)}>
      {item.warranty !== "" && (
        <div className={classes.warrantyBadge}>
          <span>{`${item.warranty} ${lang.warranty}`} </span>
        </div>
      )}
      {item.badge !== "" && (
        <div className={classes.customBadge}>
          <span>{item.badge}</span>
        </div>
      )}
    </div>
  );
};
