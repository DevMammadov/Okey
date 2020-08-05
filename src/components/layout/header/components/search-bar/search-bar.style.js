import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      position: "relative",
      margin: theme.spacing(0, 4),
      width: "70%",
      display: "flex",
      justifyContent: "space-between",
    },
    searchInputContainer: {
      width: "100%",
      marginRight: theme.spacing(1),
      position: "relative",
    },
    resultList: {
      position: "absolute",
      background: theme.palette.common.white,
      zIndex: 5,
      top: 36,
      width: "100%",
    },
    originalPrice: {
      fontSize: "1rem !important",
    },
    avatar: {
      position: "relative",
      "& img": {
        height: "100%",
        width: "100%",
        objectFit: "contain",
      },
    },
    search: {
      border: `1px solid ${grey[600]}`,
      borderRadius: theme.shape.borderRadius,
      background: theme.palette.common.white,
      width: "100%",
    },
    inputGroup: {
      position: "relative",
      display: "flex",
      width: "100%",
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: grey[400],
    },
    inputRoot: {
      width: "100%",
      height: "100%",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      height: "100%",
      width: "100%",
    },
    lookAllButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .MuiSvgIcon-root": {
        position: "relative",
        top: 2,
        marginLeft: 10,
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      container: {
        margin: 0,
        width: "100%",
      },
      mobileSearchButton: {
        color: theme.palette.common.white,
      },
      search: { marginLeft: 0, width: "100%" },
    },
  };
});
