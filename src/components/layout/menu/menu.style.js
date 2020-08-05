import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {},
    hamburgerIcon: {
      color: theme.palette.common.white,
    },
    container: {
      padding: 0,
    },
    hideOverflow: {
      overflowX: "auto",
    },
    flatList: {
      display: "flex",
      padding: 0,
    },
    listItem: {
      padding: theme.spacing(2),
      "&:hover": {
        "& $subList": {
          display: "block",
        },
      },
    },
    subList: {
      padding: 0,
      position: "absolute",
      width: "100%",
      marginLeft: theme.spacing(-2),
      top: 60,
      zIndex: 5,
      display: "none",
    },
    activeItem: {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.warning.light,
      },
    },
    icon: {
      fontSize: "1.7rem",
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(0.2),
    },
    drawerPaper: {
      maxHeight: 400,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      container: {
        padding: theme.spacing(1, 2),
      },
    },
    [theme.breakpoints.down("sm")]: {
      root: {
        display: "none",
      },
    },
  };
});
