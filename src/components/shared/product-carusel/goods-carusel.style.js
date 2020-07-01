import { makeStyles } from "@material-ui/core/styles";

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
      display: "flex",
      position: "relative",
      justifyContent: "space-between",
      color: theme.palette.color.black,
      marginBottom: theme.spacing(2),
      padding: theme.spacing(1, 0),
      "& h2": {
        margin: 0,
        textAlign: "center",
        flex: 1,
      },
      "& button": {
        position: "absolute",
        right: 0,
        fontWeight: "bold",
        color: theme.palette.primary.main,
        textTransform: "capitalize",
        "& .MuiSvgIcon-root": {
          //fontSize: "1.2rem",
        },
      },
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
      left: -10,
    },
    card: {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      carouselTitle: {
        "& h2": {
          fontSize: "0.9rem",
          textAlign: "left",
          flex: 1,
        },
        "& button": {
          padding: 0,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      slider: {
        "& .slick-track": {
          padding: "15px 0 0 33px",
        },
      },
    },
  };
});
