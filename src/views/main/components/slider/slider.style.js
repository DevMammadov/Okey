import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => {
  return {
    sliderContent: {
      position: "absolute !important",
      top: "10px",
      left: "10px",
      color: "white"
    },
    sliderContainer: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {}
  };
});
