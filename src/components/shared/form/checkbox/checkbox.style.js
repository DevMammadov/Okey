import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    checkbox: {
      padding: theme.spacing(0.5),
    },
    checked: {
      //backgroundColor: theme.palette.warning.main,
      "& .MuiIconButton-label": {
        color: theme.palette.warning.main,
      },
    },
    label: {
      fontWeight: "bold",
      color: theme.palette.color.black,
    },
    labelChecked: {
      color: theme.palette.warning.main,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
