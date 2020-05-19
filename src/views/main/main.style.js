import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    sliderContainer: {
      padding: 0,
      position: "relative",
    },
    section: {
      padding: theme.spacing(2, 0),
    },
    [theme.breakpoints.down("xl")]: {
      caruselContainer: {
        padding: "0 150px",
      },
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      caruselContainer: {
        padding: "0",
      },
    },
  };
});
