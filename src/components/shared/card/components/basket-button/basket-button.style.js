import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    basketButton: {
      padding: "6px 8px",
      fontSize: "0.8rem",
      "& .MuiSvgIcon-root": {
        fontSize: "1rem",
        lineHeight: 0.8,
        marginRight: theme.spacing(0.4),
      },
    },
    inBasketButton: {
      background: theme.palette.success.main,
      "&:hover": {
        background: theme.palette.success.light,
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
