import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    menu: {
      border: "1px solid #d3d4d5",
      width: "400px",
      flexWrap: "wrap",
      maxHeight: "400px",
      "& .MuiMenu-list": {
        padding: 0,
      },
      "& .MuiListItem-root": {
        display: "flex",
        whiteSpace: "break-spaces",
        "& img": {
          height: "70px",
          width: "70px",
          display: "block",
          objectFit: "contain",
        },
        "& > div": {
          width: "310px",
          marginLeft: theme.spacing(2),
          whiteSpace: "break-spaces",
        },
      },
    },
    listHeader: {
      background: theme.palette.common.white,
      pading: theme.spacing(1),
      color: theme.palette.color.black,
      display: "flex",
      justifyContent: "space-between",
    },
    button: {
      background: "none",
      boxShadow: "0px 0px 0px 0px",
      border: 0,
      "&:hover": {
        background: "none",
        boxShadow: "0px 0px 0px 0px",
        border: 0,
      },
    },
    listFooter: {
      position: "sticky",
      background: theme.palette.common.white,
      bottom: 0,
      padding: theme.spacing(3, 2, 1, 2),
      display: "flex",
      justifyContent: "space-between",
      "& .MuiButton-root": {
        "& span": {
          fontSize: "1rem",
          marginRight: theme.spacing(1),
        },
      },
    },
    noItem: {
      padding: theme.spacing(5),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    noItemIcon: {
      width: "100%",
      textAlign: "center",
      "& span": {
        fontSize: "3rem",
        color: grey[700],
      },
    },
    money: {
      fontFamily: "JISAZNBold",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      button: {
        color: theme.palette.common.white,
      },
    },
  };
});
