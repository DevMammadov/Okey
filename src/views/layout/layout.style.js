import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {},
    menuNav: {
      background: theme.palette.common.black,
    },
    [theme.breakpoints.down("xl")]: {
      menuNav: {
        padding: "0 150px",
      },
    },
    [theme.breakpoints.down("lg")]: {
      header: {
        padding: 0,
      },
    },
    [theme.breakpoints.down("md")]: {
      root: {},
    },
    [theme.breakpoints.down("sm")]: {
      root: {},
    },
  };
});
