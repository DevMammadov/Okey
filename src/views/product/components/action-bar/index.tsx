import React, { FC } from "react";
import { useStyles } from "./action-bar.style";
import { Button, IconButton } from "@material-ui/core";
import { BasketButton } from "components/shared/card/components/basket-button";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import ShareIcon from "@material-ui/icons/Share";

interface IActionBar {
  onBasketAdd(): void;
  onOrder?(): void;
  inBasket: boolean;
}

export const ActionBar: FC<IActionBar> = ({ onBasketAdd, inBasket, onOrder }) => {
  const classes = useStyles();

  return (
    <div className={classes.actionBar}>
      <Button className={classes.orderButton} onClick={onOrder} variant="contained">
        Sifaris et
      </Button>
      <BasketButton className={classes.basketButton} onClick={onBasketAdd} inBasket={inBasket} />
      <IconButton aria-label="share">
        <CompareArrowsIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </div>
  );
};
