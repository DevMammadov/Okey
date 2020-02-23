import React from "react";
import BannerAnim from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";
import image from "dist/IhCNTqPpLeTNnwr.jpg";
import { useStyles } from "./slider.style";
import { Button } from "@material-ui/core";

export const Slider = () => {
  const { Element } = BannerAnim;
  const BgElement = Element.BgElement;
  const classes = useStyles();

  return (
    <BannerAnim style={{ height: "400px" }}>
      <Element key="aaa" prefixCls="banner-user-elem">
        <BgElement
          key="bg"
          className="bg"
          style={{
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%"
          }}
        />
        <QueueAnim className={classes.sliderContent}>
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">
            Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo
          </p>
        </QueueAnim>
        <TweenOne animation={{ y: 50, opacity: 0, type: "from", delay: 200 }}>
          Ant Motion Demo.Ant Motion Demo
        </TweenOne>
      </Element>
      <Element key="aaab" prefixCls="banner-user-elem">
        <BgElement
          key="bg"
          className="bg"
          style={{
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%"
          }}
        />
        <QueueAnim className={classes.sliderContent}>
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">
            <Button variant="contained" color="primary">
              Indi al !
            </Button>
          </p>
        </QueueAnim>
        <TweenOne animation={{ y: 50, opacity: 0, type: "from", delay: 200 }}>
          Ant Motion Demo.Ant Motion Demo
        </TweenOne>
      </Element>
    </BannerAnim>
  );
};
