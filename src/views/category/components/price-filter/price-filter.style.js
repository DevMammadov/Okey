import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
    },
    formGroup: {
      display: "flex",
      marginBottom: theme.spacing(3),
    },
    seperator: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: theme.spacing(0, 2),
      color: theme.palette.primary.main,
      paddingTop: theme.spacing(1.5),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
