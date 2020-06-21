import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      overflow: "hidden",
      position: "relative",
      wordBreak: "break-word",
      "& .MuiCardMedia-root": {
        cursor: "pointer",
      },
      "& $itemName": {
        textDecoration: "none",
        display: "block",
        height: "35px",
        color: theme.palette.color.black,
        fontWeight: "bold",
        margin: theme.spacing(2, 0),
        "&:hover": {
          textDecoration: "underline",
        },
      },
      "& .MuiCardActions-root": {
        "& .MuiButton-contained": {
          background: theme.palette.warning.main,
        },
      },
    },
    portraitCard: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      maxWidth: 350,
      height: "100%",
      "& .MuiCardMedia-root": {
        height: 0,
        width: "100%",
        paddingTop: "56.25%",
        backgroundSize: "contain",
        flexGrow: 2,
      },
      "& .MuiCardContent-root": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: theme.spacing(1),
        fontSize: "0.9rem",
        textAlign: "center",
        flexGrow: 4,
      },
      "& .MuiCardActions-root": {
        flexGrow: 1,
        paddingBottom: theme.spacing(4),
        paddingTop: theme.spacing(4),
        height: "55px",
        "& .MuiIconButton-root": {
          padding: theme.spacing(1),
        },
        "& .MuiButton-contained": {
          marginRight: theme.spacing(1),
        },
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
        flexWrap: "wrap",
        "& .MuiButton-contained": {
          width: "100%",
          marginBottom: theme.spacing(1),
        },
        "& .MuiIconButton-root": {
          //width: "50%",
        },
      },
      "& $itemName": {
        // marginBottom: theme.spacing(3),
      },
    },
    itemName: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      portraitCard: {
        maxWidth: 100,
      },
    },
    [theme.breakpoints.down("sm")]: {},
  };
});
