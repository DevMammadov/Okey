import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => {
  return {
    root: {},
    header: {
      padding: "0 100px"
    },
    [theme.breakpoints.down("xl")]: {
      root: {
        padding: "0 200px"
      }
    },
    [theme.breakpoints.down("lg")]: {
      root: {
        padding: "0 150px"
      },
      header: {
        padding: 0
      }
    },
    [theme.breakpoints.down("md")]: {
      root: {
        padding: "0 100px"
      }
    },
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: "0"
      }
    }
  };
});
