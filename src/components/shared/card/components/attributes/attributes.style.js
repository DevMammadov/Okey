import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    attributeTable: {
      "& .MuiTableCell-root": {
        padding: theme.spacing(0.3),
        fontSize: "0.8rem",
        border: "none",
        fontWeight: "bold",
        color: grey[600],
      },
      maxWidth: "450px",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
