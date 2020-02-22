import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => {
  return {
    menu: {
      border: "1px solid #d3d4d5",
      width: "400px",
      flexWrap: "wrap",
      "& .MuiListItem-root": {
        display: "flex",
        alignItems: "flex-start",
        whiteSpace: "break-spaces",
        "& img": {
          height: "50px",
          width: "50px",
          display: "block"
        },
        "& div": {
          width: "310px",
          marginLeft: theme.spacing(2),
          whiteSpace: "break-spaces"
        }
      }
    },
    button: {
      background: "none",
      boxShadow: "0px 0px 0px 0px",
      border: 0,
      "&:hover": {
        background: "none",
        boxShadow: "0px 0px 0px 0px",
        border: 0
      }
    },
    buttonItem: {
      display: "flex",
      padding: 0,
      justifyContent: "center",
      "& .MuiButton-root": {
        width: "100%"
      }
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      button: {
        color: theme.palette.common.white
      }
    }
  };
});
