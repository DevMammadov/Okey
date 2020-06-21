import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    caruselContainer: {
      position: "relative",
      "& .alice-carousel": {
        marginRight: "-5px",
        "& ul li": {
          padding: theme.spacing(1, 1, 1, 1),
        },
      },
    },
    carouselTitle: {
      textAlign: "center",
      color: theme.palette.color.black,
      background: grey[100],
    },
    arrow: {
      position: "absolute",
      top: "50%",
      transform: "translateX(-50%)",
      padding: theme.spacing(2, 1),
      background: theme.palette.warning.light,
      transition: "all .5s",
      color: theme.palette.common.white,
      width: "30px",
      "&:hover": {
        background: theme.palette.warning.main,
      },
    },
    nextArrow: {
      right: -42,
    },
    prevArrow: {
      left: 0,
    },
    card: {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("xs")]: {
      slider: {
        "& .slick-track": {
          padding: "15px 0 0 33px",
        },
      },
    },
  };
});
