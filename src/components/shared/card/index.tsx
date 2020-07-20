import React, { FC, CSSProperties } from "react";
import { useStyles } from "./card.style";
import okeyLogo from "dist/smallLogo.png";
import { Card as MaterialCard, IconButton, CardMedia, CardContent, CardActions, Link } from "@material-ui/core";
import clsx from "clsx";
import { CardBadge, Price, Attributes, BasketButton } from "./components";
import { stringCutter } from "helpers";
import { IProduct } from "views/category/types";
import { IBasketProduct } from "components/layout/header/types";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { round } from "helpers";

export interface ICard {
  item: IProduct;
  className?: string;
  style?: CSSProperties;
  showBadge?: boolean;
  inBasket?: boolean;
  list?: boolean;
  onToggleBasket?(product: IBasketProduct): void;
  onClick?(name: string): void;
}

export const Card: FC<ICard> = ({
  item,
  className,
  style,
  list = false,
  showBadge = true,
  onToggleBasket = () => {},
  inBasket = false,
  onClick = () => {},
}) => {
  const classes = useStyles();

  const handleImageClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <MaterialCard
      style={style}
      className={clsx(classes.root, list ? classes.listCard : classes.portraitCard, className)}
    >
      <CardMedia
        component="a"
        onClick={(e: any) => handleImageClick(e)}
        image={item.image ? item.image : okeyLogo}
        title={item.name}
      />
      {showBadge && <CardBadge isList={list} item={item} />}
      <CardContent>
        <Link onClick={() => onClick(item.name)} className={classes.itemName}>
          {list ? item.name : stringCutter(item.name, 60)}
        </Link>
        <Price isList={list} price={item.price} discount={item.discount} />
        {list && <Attributes list={item.attributes} />}
      </CardContent>
      <CardActions disableSpacing>
        <div>
          <BasketButton
            variant="contained"
            onClick={() =>
              onToggleBasket({
                id: item.id,
                name: item.name,
                price: round(item.price - item.discount),
                image: item.image,
                count: 1,
              })
            }
            inBasket={inBasket}
          />
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <CompareArrowsIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>
      </CardActions>
    </MaterialCard>
  );
};
