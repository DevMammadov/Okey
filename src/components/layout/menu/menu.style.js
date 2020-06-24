import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    root: {},
    container: {
      padding: 0,
      "& ul": {
        zIndex: "555",
        listStyle: "none",
        //background: theme.palette.warning.main,
        display: "flex",
        padding: 0,
        margin: 0,
        "& li": {
          position: "relative",
          "&:hover": {
            "& > a": {
              color: theme.palette.warning.main,
              //background: theme.palette.warning.light,
            },
            "& > div": {
              display: "block",
            },
          },
        },
        "& li:last-child": {
          border: "none",
        },
        "& li a.active": {
          //background: theme.palette.warning.light,
          color: theme.palette.warning.main,
        },
        "& li a": {
          display: "flex",
          alignItems: "center",
          padding: theme.spacing(1),
          fontSize: "18px",
          color: grey[800],
          textDecoration: "none",
          justifyContent: "center",
        },
        "& li > div": {
          display: "none",
          position: "absolute",
          transform: "translateX(-50%)",
          left: "50%",
          zIndex: 5,
        },
        "& li ul": {
          position: "relative",
          paddingTop: "10px",
          top: "-10px",
          minWidth: "200px",
          background: theme.palette.common.white,
          "& li": {
            borderRight: "none",
            borderBottom: "1px solid",
            width: "100%",
          },
          "& li:last-child": {
            border: "none",
          },
          "& a": {
            textAlign: "center",
            width: "100%",
            padding: theme.spacing(1, 3),
          },
        },
      },
    },
    icon: {
      fontSize: "1.7rem",
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(0.2),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      container: {
        padding: "8px 16px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      root: {
        display: "none",
      },
    },
  };
});
