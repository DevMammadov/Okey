import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    contentWrapper: {
      flex: "1 0 auto",
      display: "flex",
      flexDirection: "column",
    },
    menuNav: {
      background: theme.palette.common.black,
    },
    main: {
      flex: 1,
      "& section": {
        height: "100%",
      },
    },
    footer: {
      flexShrink: 0,
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
