import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => {
  return {
    root: {
      "& nav": {
        background: theme.palette.common.black
      }
    },
    [theme.breakpoints.down("xl")]: {
      root: {
        "& nav": {
          padding: "0 150px"
        }
      }
    },
    [theme.breakpoints.down("lg")]: {
      root: {},
      header: {
        padding: 0
      }
    },
    [theme.breakpoints.down("md")]: {
      root: {}
    },
    [theme.breakpoints.down("sm")]: {
      root: {}
    }
  };
});
