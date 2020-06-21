import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    filterBar: {
      padding: theme.spacing(1, 1),
      background: grey[100],
      display: "flex",
      justifyContent: "space-between",
    },
    activeViewMode: {
      "& .MuiSvgIcon-root": {
        color: theme.palette.danger.main,
      },
    },
    chipContainer: {
      display: "flex",
      alignItems: "center",
    },
    chip: {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
