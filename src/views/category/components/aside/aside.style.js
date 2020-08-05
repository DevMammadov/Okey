import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      "& .MuiListSubheader-root": {
        textTransform: "capitalize",
        fontSize: "1.2rem",
      },
      "& .MuiListSubheader-gutters": {
        padding: 0,
        fontWeight: "bold",
      },
    },
    header: {
      padding: 8,
      fontSize: "2rem",
      textTransform: "capitalize",
      fontWeight: "bold",
      color: theme.palette.warning.main,
    },
    CollapseItem: {
      marginBottom: theme.spacing(1),
      borderRadius: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    listHeader: {
      paddingBottom: 0,
      "& .MuiListItemText-primary": {
        fontWeight: "bold",
      },
    },
    nestedList: {
      paddingLeft: theme.spacing(1),
      "& .MuiListItem-root": {
        paddingBottom: 0,
        "& .MuiListItemText-primary": {
          fontSize: "0.9rem",
        },
      },
    },
    filterCheckbox: {
      padding: 0,
      marginRight: theme.spacing(0.5),
      "& .MuiSvgIcon-root": {
        fontSize: "1.1rem",
      },
    },
    checkBoxLabel: {
      "& .MuiFormControlLabel-label": {
        fontSize: "0.9rem",
      },
    },
    countBadge: {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(0.7),
      "& span": {
        lineHeight: "0.5rem",
        fontSize: "0.8rem",
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
