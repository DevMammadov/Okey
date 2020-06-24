import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      root: {
        padding: "8px 16px",
      },
    },
    [theme.breakpoints.down("sm")]: {},
  };
});
