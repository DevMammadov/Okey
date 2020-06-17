import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    caruselContainer: {
      //height: "400px",
      "& .alice-carousel": {
        marginRight: "-5px",
        "& ul li": {
          padding: theme.spacing(1, 0),
        },
      },
      "& .alice-carousel__prev-btn": {
        position: "absolute",
        left: 0,
        top: "50%",
        padding: 0,
        width: "unset",
      },
      "& .alice-carousel__next-btn": {
        position: "absolute",
        right: 0,
        top: "50%",
        padding: 0,
        width: "unset",
      },
    },
    card: {
      height: "100%",
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
