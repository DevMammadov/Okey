import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    sectionTitle: {
      margin: theme.spacing(1, 0),
    },
    icon: {
      fontSize: "1rem",
      lineHeight: "1.1rem",
      marginRight: theme.spacing(1),
    },
    title: {
      fontSize: ".9rem",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
