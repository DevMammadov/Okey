import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    priceContainer: {
      display: "flex",
      justifyContent: "center",
    },
    listPrice: {
      justifyContent: "flex-start",
    },
    money: {
      fontFamily: "JISAZNBold",
    },
    originalPrice: {
      fontWeight: "bold",
      position: "relative",
      fontSize: "0.9rem",
      lineHeight: "2rem",
      color: grey[600],
      "&::after": {
        content: "''",
        position: "absolute",
        height: "1.5px",
        width: "80%",
        backgroundColor: grey[600],
        left: 0,
        bottom: "50%",
        transform: "rotateZ(20deg)",
      },
    },
    currentPrice: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      color: theme.palette.warning.main,
      marginLeft: theme.spacing(1),
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
