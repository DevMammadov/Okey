import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    sliderContainer: {
      padding: 0,
      position: "relative",
    },
    section: {
      padding: "16px 150px",
    },
    sliderCard: {
      width: "100%",
      maxWidth: "unset",
    },
    [theme.breakpoints.down("xl")]: {
      caruselContainer: {
        padding: "0 150px 50px 150px",
      },
      slider: {
        padding: "10px 0",
      },
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      caruselContainer: {
        padding: "0",
      },
      section: {
        padding: "16px 50px",
      },
    },
  };
});
