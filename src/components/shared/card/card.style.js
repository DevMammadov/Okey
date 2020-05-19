import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: 345,
      height: "100%",
      position: "relative",
      "& .MuiCardMedia-root": {
        height: 0,
        paddingTop: "56.25%",
        backgroundSize: "contain",
      },
    },
    listCard: {
      maxWidth: "100%",
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(1),
      "& .MuiCardMedia-root": {
        height: 300,
        width: 300,
        padding: theme.spacing(1),
        backgroundSize: "contain",
      },
      "& .MuiCardContent-root": {
        flex: "auto",
        minWidth: "450px",
      },
      "& .MuiCardActions-root": {
        flex: 1,
      },
    },
    attributeTable: {
      "& .MuiTableCell-root": {
        padding: theme.spacing(1),
        fontSize: "0.9rem",
        fontStyle: "italic",
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
