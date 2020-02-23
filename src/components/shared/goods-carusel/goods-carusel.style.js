import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => {
  return {
    sliderContainer: {
      position: "relative",
      textAlign: "center"
    },
    slider: {
      "& .slick-next": {
        right: "10px"
      },
      "& .slick-prev": {
        left: "10px",
        zIndex: "55"
      }
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {}
  };
});
