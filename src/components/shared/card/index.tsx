import React, { FC, CSSProperties } from "react";
import { useStyles } from "./card.style";
import { IProduct, IAttribute } from "types";
import okeyLogo from "dist/smallLogo.png";
import {
  Card as MaterialCard,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  TableContainer,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import clsx from "clsx";
import { CardBadge } from "./components";

export interface ICard {
  item: IProduct;
  className?: string;
  style?: CSSProperties;
  showBadge?: boolean;
  list?: boolean;
}

export const Card: FC<ICard> = ({ item, className, style, list = false, showBadge = true }) => {
  const classes = useStyles();

  const sliceArray = (start: number, end: number, arr: any[] | undefined) => {
    if (arr && arr.length > end) {
      return arr.slice(start, end);
    }
    return arr || [];
  };

  const renderAttributes = () => {
    return (
      list && (
        <TableContainer component="table" className={classes.attributeTable}>
          <TableBody>
            {sliceArray(0, 5, item.attributes).map((v: IAttribute, i: number) => (
              <TableRow key={i}>
                <TableCell>{v.name}</TableCell>
                <TableCell align="right">{v.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      )
    );
  };

  return (
    <MaterialCard style={style} className={clsx(classes.root, className, list && classes.listCard)}>
      <CardMedia image={item.image ? item.image : okeyLogo} title={item.name} />
      {showBadge && <CardBadge item={item} />}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="div">
          <h3>{item.name?.length > 25 && !list ? `${item.name.substr(0, 28)}... ` : item.name}</h3>
        </Typography>
        {renderAttributes()}
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
