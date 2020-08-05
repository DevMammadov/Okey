import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    selectContainer: {
      display: "inline-block",
    },
    root: {
      width: "inherit",
    },
    select: {
      padding: theme.spacing(1),
      background: theme.palette.common.white,
      "&:focus": {
        background: theme.palette.common.white,
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
