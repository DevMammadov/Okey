import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    caruselContainer: {
      position: "relative",
      textAlign: "center",
    },
    slider: {
      userSelect: "text",
      "& .slick-next": {
        right: "10px",
        background: "black",
      },
      "& .slick-track": {
        padding: "15px 0 15px 30px",
      },
      "& .slick-prev": {
        left: "10px",
        zIndex: "55",
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
