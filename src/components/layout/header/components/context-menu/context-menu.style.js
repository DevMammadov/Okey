import { makeStyles } from "@material-ui/core/styles";
import { Opacity } from "@material-ui/icons";

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
        "& div": {
          width: "310px",
          marginLeft: theme.spacing(2),
          whiteSpace: "break-spaces",
        },
      },
    },
    listHeader: {
      background: theme.palette.common.white,
      pading: theme.spacing(1),
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
      padding: theme.spacing(1, 0),
      "& .MuiButton-root": {
        width: "100%",
      },
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
