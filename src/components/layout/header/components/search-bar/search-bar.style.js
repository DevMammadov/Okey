import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => {
  return {
    search: {
      position: "relative",
      border: `1px solid ${theme.palette.color.black}`,
      borderRadius: theme.shape.borderRadius,
      marginLeft: theme.spacing(10),
      background: theme.palette.common.white,
      width: "50%"
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      width: "100%",
      height: "100%"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      height: "100%",
      width: "100%"
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      mobileSearchButton: {
        color: theme.palette.common.white
      },
      search: { marginLeft: 0, width: "100%" }
    }
  };
});
