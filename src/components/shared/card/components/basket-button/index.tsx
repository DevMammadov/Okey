import React, { FC } from "react";
import { Button, ButtonProps } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";
import { useStyles } from "./basket-button.style";
import { useTranslator } from "localization";
import clsx from "clsx";

export interface IBasketButton {
  inBasket: boolean;
  className?: string;
}

export const BasketButton: FC<IBasketButton & ButtonProps> = ({ inBasket, className, ...rest }) => {
  const classes = useStyles();
  const lang = useTranslator("item");

  return (
    <Button
      variant="contained"
      className={clsx(classes.basketButton, inBasket && classes.inBasketButton, className)}
      {...rest}
    >
      {inBasket ? (
        <>
          <DoneIcon />
          <span>{lang.inBasket}</span>
        </>
      ) : (
        <>
          <AddIcon />
          <span>{lang.toBasket}</span>
        </>
      )}
    </Button>
  );
};
