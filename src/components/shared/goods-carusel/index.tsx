import React, { FC, CSSProperties } from "react";
import Slider from "react-slick";
import { IGoods, IImages } from "types";
import { useStyles } from "./goods-carusel.style";
import { Card } from "../card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface IGoodCaruselProps {
  list: IGoods[];
  images: IImages[];
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const GoodCarusel: FC<IGoodCaruselProps> = ({
  list,
  images,
  title,
  style,
  className
}) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    arrows: true
  };

  const renderImage = (id: number) => {
    let image = images.filter((img: IImages) => img.productId === id)[0];
    return image ? image : undefined;
  };

  return (
    <div className={`${className} ${classes.sliderContainer}`} style={style}>
      {title && <h2>{title}</h2>}
      <Slider {...settings} className={classes.slider}>
        {list.map((good: IGoods) => (
          <Card key={good.id} item={good} image={renderImage(good.id)} />
        ))}
      </Slider>
    </div>
  );
};
