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
    discountPrice: {
      fontWeight: "bold",
      position: "relative",
      fontSize: "0.9rem",
      lineHeight: "1.8",
      display: "flex",
      alignItems: "flex-end",
      marginRight: theme.spacing(1),
      color: grey[600],
      "&::after": {
        content: "''",
        position: "absolute",
        height: "1.5px",
        width: "80%",
        backgroundColor: grey[600],
        left: 0,
        bottom: "35%",
        transform: "rotateZ(20deg)",
      },
    },
    currentPrice: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      color: theme.palette.warning.main,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
