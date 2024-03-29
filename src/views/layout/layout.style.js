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
      width: "1300px",
      margin: "0 auto",
      padding: theme.spacing(3, 0, 2, 0),
    },
    menuNav: {
      boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)",
      background: grey[200],
      "& > div": {
        width: 1300,
        margin: "0 auto",
        background: theme.palette.common.white,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        borderRadius: "6px",
      },
    },
    main: {
      flex: 1,
      "& section": {
        background: grey[200],
        paddingBottom: theme.spacing(2),
        "& section": {
          // all pages expect main page
          width: 1300,
          minHeight: 400,
          margin: "0 auto",
          background: theme.palette.common.white,
          borderRadius: 6,
        },
      },
    },
    footer: {
      flexShrink: 0,
      background: theme.palette.color.black,
      padding: "8px 120px",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      header: {
        padding: 0,
      },
    },
    [theme.breakpoints.down("sm")]: {
      header: {
        width: 411,
        padding: theme.spacing(3, 0, 2, 0),
        padding: 0,
      },
      main: {
        "& section": {
          "& section": {
            // all pages expect main page
            width: 411,
            minHeight: 400,
          },
        },
      },
    },
  };
});
