import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    chipBar: {
      padding: theme.spacing(1, 1),
      "& .MuiChip-root": {
        marginRight: theme.spacing(1),
      },
    },
    chipContainer: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
