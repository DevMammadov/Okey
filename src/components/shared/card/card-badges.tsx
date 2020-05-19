import React, { CSSProperties, FC } from "react";
import { useStyles } from "./card.style";
import { IGoods } from "types";
import clsx from "clsx";
import { translator } from "translation";

export interface ICardPadges {
  item: IGoods;
  className?: string;
}

export const CardBadges: FC<ICardPadges> = ({ item, className }) => {
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
