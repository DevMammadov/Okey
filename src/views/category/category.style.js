import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: "100%",
    },
    cardContainer: {
      height: "100%",
    },
    noItem: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      container: {
        padding: "8px 16px",
      },
    },
    [theme.breakpoints.down("sm")]: {},
  };
});
