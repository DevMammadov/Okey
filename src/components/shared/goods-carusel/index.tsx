import { isWidthUp, withWidth, isWidthDown } from "@material-ui/core";
import React, { CSSProperties, FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { IProduct, IImages } from "types";
import { Card } from "../card";
import { useStyles } from "./goods-carusel.style";
import clsx from "clsx";
interface ICaruselClasses {
  card?: string;
  carusel?: string;
  root?: string;
}

export interface IGoodCaruselProps {
  list: IProduct[];
  images: IImages[];
  title?: string;
  classList?: ICaruselClasses;
  style?: CSSProperties;
  width: any;
}

const GoodCarusel: FC<IGoodCaruselProps> = ({ list, images, title, style, width, classList }) => {
  const classes = useStyles();

  const itemToShow = () => {
    let items = 0;
    if (isWidthDown("xl", width)) items = 4;
    if (isWidthDown("md", width)) items = 3;
    if (isWidthDown("sm", width)) items = 2;
    if (isWidthDown("xs", width)) items = 1;
    return items;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: itemToShow(),
    slidesToScroll: 1,
    swipe: !isWidthUp("sm", width),
    touchmove: true,
    arrows: true,
  };

  return (
    <div className={clsx(classList?.root && classList?.root, classes.caruselContainer)} style={style}>
      {title && <h2>{title}</h2>}
      <Slider {...settings} className={clsx(classes.slider, classList?.carusel && classList.carusel)}>
        {list.map((good: IProduct) => (
          <Card key={good.id} item={good} className={classList?.card} />
        ))}
      </Slider>
    </div>
  );
};

export default withWidth()(GoodCarusel);
