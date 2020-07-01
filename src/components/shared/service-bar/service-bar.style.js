import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    serviceBar: {
      background: grey[100],
      display: "flex",
      padding: theme.spacing(2, 0),
    },
    service: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "200px",
      color: grey[400],
    },
    icon: {
      fontSize: "3.5rem",
      display: "block",
      width: "100%",
      textAlign: "center",
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
