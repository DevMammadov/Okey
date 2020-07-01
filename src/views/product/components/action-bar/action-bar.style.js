import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    actionBar: {
      border: `1px solid ${grey[300]}`,
      padding: theme.spacing(3),
      marginTop: theme.spacing(4),
      "& .MuiButtonBase-root": {
        marginRight: theme.spacing(3),
      },
    },
    orderButton: {
      background: theme.palette.danger.main,
      padding: theme.spacing(1, 5),
      fontSize: "0.9rem",
      "&:hover": {
        background: theme.palette.danger.light,
      },
      animation: `$orderButtonEffect 2000ms ${theme.transitions.easing.easeInOut} infinite`,
    },
    basketButton: {
      padding: theme.spacing(1, 5),
      fontSize: "0.9rem",
    },
    "@keyframes orderButtonEffect": {
      "0%": {
        WebkitBoxShadow: "0px 0px 0px 0px #EA2227",
        MozBoxShadow: "0px 0px 0px 0px #EA2227",
        boxShadow: "0px 0px 0px 0px #EA2227",
      },
      "100%": {
        WebkitBoxShadow: "0px 0px 18px 10px #fff",
        MozBoxShadow: "0px 0px 18px 10px #fff",
        boxShadow: "0px 0px 18px 10px #fff",
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
