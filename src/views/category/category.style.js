import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing(1, 0),
      height: "100%",
    },
    filterBar: {
      padding: theme.spacing(1, 1),
      background: grey[100],
      display: "flex",
      justifyContent: "space-between",
    },
    cardContainer: {
      height: "100%",
    },
    activeViewMode: {
      "& .MuiSvgIcon-root": {
        color: theme.palette.danger.main,
      },
    },
    noItem: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
