import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    sliderImage: {
      width: "100%",
      maxHeight: "350px",
      objectFit: "contain",
    },
    thumbnails: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(4),
      "& img": {
        height: "80px",
        width: "80px",
        cursor: "pointer",
        objectFit: "contain",
        marginRight: theme.spacing(2),
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
