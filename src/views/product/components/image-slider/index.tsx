import React, { FC } from "react";
import { useStyles } from "./image-slider.style";
import AliceCarousel from "react-alice-carousel";
//import { useTranslator } from "localization";
import "react-alice-carousel/lib/alice-carousel.css";

export interface IImageSlider {
  images: string[];
}

export const ImageSlider: FC<IImageSlider> = ({ images }) => {
  const classes = useStyles();
  //const lang = useTranslator("main");
  let Carousel: any;

  const thumbItem = (item: any, i: any) => <img alt="" key={i} src={item} onClick={() => Carousel.slideTo(i)} />;

  return (
    <div>
      <AliceCarousel
        duration={400}
        autoPlay={false}
        startIndex={1}
        fadeOutAnimation={true}
        stopAutoPlayOnHover={true}
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlayActionDisabled={true}
        buttonsDisabled={true}
        dotsDisabled={true}
        items={images?.map((src: string, i: number) => (
          <img alt="" className={classes.sliderImage} key={i} src={src} />
        ))}
        ref={(el) => (Carousel = el)}
      />
      <nav className={classes.thumbnails}>{images?.map(thumbItem)}</nav>
    </div>
  );
};
