import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => {
  return {
    root: {
      padding: 0,
      "& ul": {
        zIndex: "555",
        listStyle: "none",
        background: theme.palette.common.black,
        display: "flex",
        padding: 0,
        margin: 0,
        "& li": {
          position: "relative",
          padding: theme.spacing(0, 1),
          borderRight: "1px solid",
          borderColor: theme.palette.common.black,
          "&:hover": {
            background: theme.palette.warning.main,
            "& > a": {
              color: theme.palette.common.black
            },
            "& > ul": {
              display: "block"
            }
          }
        },
        "& li:last-child": {
          border: "none"
        },
        "& li a": {
          display: "block",
          padding: theme.spacing(2),
          fontSize: "18px",
          color: theme.palette.warning.main,
          fontWeight: "bold",
          textDecoration: "none"
        },
        "& li ul": {
          position: "absolute",
          minWidth: "200px",
          left: "50%",
          display: "none",
          transform: "translateX(-50%)",
          "& li": {
            borderRight: "none",
            borderBottom: "1px solid"
          },
          "& li:last-child": {
            border: "none"
          },
          "& a": {
            padding: theme.spacing(2)
          }
        }
      }
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      root: {
        display: "none"
      }
    }
  };
});
