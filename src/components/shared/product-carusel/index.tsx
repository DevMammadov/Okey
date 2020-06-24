import React, { CSSProperties, FC } from "react";
import { Card } from "../card";
import { useStyles } from "./goods-carusel.style";
import clsx from "clsx";
import { IProduct } from "views/category/types";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IconButton, Button } from "@material-ui/core";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { useTranslator } from "localization";
import { IBasketProduct } from "components/layout/header/types";

interface ICaruselClasses {
  card?: string;
  carusel?: string;
  root?: string;
}

export interface IProductCarusel {
  list: IProduct[];
  basket?: IBasketProduct[];
  title?: string;
  classList?: ICaruselClasses;
  style?: CSSProperties;
  onToggleBasket?(product: IBasketProduct): void;
  onCardClick?(name: string): void;
}

export const ProductCarusel: FC<IProductCarusel> = ({
  list,
  title,
  style,
  classList,
  onToggleBasket,
  basket,
  onCardClick,
}) => {
  const classes = useStyles();
  const lang = useTranslator("main");
  let Carousel: any;

  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  };

  const elementInBasket = (id: number) => {
    if (basket) {
      return basket.some((product) => product.id === id);
    } else {
      return false;
    }
  };

  return (
    <div className={clsx(classList?.root && classList?.root, classes.caruselContainer)} style={style}>
      {title && (
        <div className={classes.carouselTitle}>
          <h2>{title}</h2>
          <Button>
            {lang.lookAll} <DoubleArrowIcon />
          </Button>
        </div>
      )}
      <AliceCarousel
        duration={400}
        responsive={responsive}
        autoPlay={false}
        startIndex={1}
        fadeOutAnimation={true}
        stopAutoPlayOnHover={true}
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlayActionDisabled={true}
        buttonsDisabled={true}
        dotsDisabled={true}
        items={list.map((product: IProduct) => (
          <Card
            key={product.id}
            item={product}
            onToggleBasket={onToggleBasket}
            className={clsx(classes.card, classList?.card)}
            inBasket={elementInBasket(product.id)}
            onClick={onCardClick}
          />
        ))}
        ref={(el) => (Carousel = el)}
      />
      <IconButton className={clsx(classes.arrow, classes.prevArrow)} onClick={() => Carousel.slidePrev()}>
        <ArrowLeftIcon />
      </IconButton>
      <IconButton className={clsx(classes.arrow, classes.nextArrow)} onClick={() => Carousel.slideNext()}>
        <ArrowRightIcon />
      </IconButton>
    </div>
  );
};
