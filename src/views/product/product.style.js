import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    infoSide: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    productName: {
      fontSize: "2rem",
      margin: 0,
      marginBottom: theme.spacing(2),
    },
    price: {
      "& $originalPrice": {
        fontSize: "2rem",
      },
      "& $discount": {
        fontSize: "1.3rem",
      },
    },
    chipColorContainer: {
      display: "flex",
      marginTop: theme.spacing(2),
    },
    attributeHeader: {
      color: theme.palette.color.black,
      textAlign: "center",
      margin: 0,
    },
    asideCard: {
      height: 400,
    },
    discount: {},
    originalPrice: {},
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
