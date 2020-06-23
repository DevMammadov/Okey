import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

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
    header: {
      paddingBottom: theme.spacing(2),
    },
    menuNav: {
      boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)",
    },
    main: {
      flex: 1,
      "& section": {
        height: "100%",
      },
    },
    footer: {
      flexShrink: 0,
      background: theme.palette.color.black,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      header: {
        padding: 0,
      },
    },
    [theme.breakpoints.down("sm")]: {},
  };
});
