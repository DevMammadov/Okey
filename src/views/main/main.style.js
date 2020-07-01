import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    sliderContainer: {
      marginBottom: `${theme.spacing(2)}px !important`,
      paddingBottom: `0 !important`,
    },
    section: {},
    sliderCard: {
      width: "100%",
      maxWidth: "unset",
    },
    [theme.breakpoints.down("xl")]: {
      caruselContainer: {},
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
