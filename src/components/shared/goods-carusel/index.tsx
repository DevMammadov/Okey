import { isWidthUp, withWidth, isWidthDown } from "@material-ui/core";
import React, { CSSProperties, FC } from "react";
import { Card } from "../card";
import { useStyles } from "./goods-carusel.style";
import clsx from "clsx";
import { IProduct } from "views/category/types";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface ICaruselClasses {
  card?: string;
  carusel?: string;
  root?: string;
}

export interface IGoodCaruselProps {
  list: IProduct[];
  title?: string;
  classList?: ICaruselClasses;
  style?: CSSProperties;
  width: any;
}

const GoodCarusel: FC<IGoodCaruselProps> = ({ list, title, style, width, classList }) => {
  const classes = useStyles();

  const itemToShow = () => {
    let items = 0;
    if (isWidthDown("xl", width)) items = 4;
    if (isWidthDown("md", width)) items = 3;
    if (isWidthDown("sm", width)) items = 2;
    if (isWidthDown("xs", width)) items = 1;
    return items;
  };

  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 4,
    },
    1024: {
      items: 5,
    },
  };

  return (
    <div className={clsx(classList?.root && classList?.root, classes.caruselContainer)} style={style}>
      {title && <h2>{title}</h2>}
      <AliceCarousel
        duration={1500}
        responsive={responsive}
        autoPlay={false}
        startIndex={1}
        fadeOutAnimation={true}
        stopAutoPlayOnHover={true}
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlayActionDisabled={true}
        dotsDisabled={true}
      >
        {list.map((good: IProduct) => (
          <Card key={good.id} item={good} className={classList?.card} />
        ))}
      </AliceCarousel>
    </div>
  );
};

export default withWidth()(GoodCarusel);
