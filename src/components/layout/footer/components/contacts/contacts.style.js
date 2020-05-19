import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    socialIcons: {
      "& .MuiSvgIcon-root": {
        fontSize: "2rem",
        border: `2px solid ${theme.palette.warning.main}`,
        padding: theme.spacing(0.5),
        borderRadius: theme.spacing(1),
        color: theme.palette.warning.main,
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
