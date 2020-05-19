import React, { FC, CSSProperties } from "react";
import { useStyles } from "./card.style";
import { IGoods, IImages } from "types";
import okeyLogo from "dist/smallLogo.png";
import clsx from "clsx";
import {
  Card as MaterialCard,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

export interface ICard {
  item: IGoods;
  image: IImages | undefined;
  className?: string;
  style?: CSSProperties;
}

export const Card: FC<ICard> = ({ item, image, className, style }) => {
  const classes = useStyles();

  return (
    <MaterialCard style={style} className={clsx(classes.root, className)}>
      <CardMedia
        className={classes.media}
        image={image?.name ? image.name : okeyLogo}
        title={item.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="div">
          <h3> {item.name} </h3>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </MaterialCard>
  );
};
