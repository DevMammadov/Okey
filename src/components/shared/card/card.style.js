import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => {
  return {
    root: {
      maxWidth: 345,
      position: "relative"
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
      backgroundSize: "contain",
      margin: theme.spacing(1, 2)
    },
    cardContent: {},
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    badgeContainer: {
      position: "absolute",
      top: theme.spacing(2),
      right: theme.spacing(2),
      color: theme.palette.common.white,
      width: "75px",
      flexWrap: "wrap",
      "& > div": {
        fontWeight: 600,
        width: "100%",
        borderRadius: "50%",
        display: "webkit-box",
        display: "flex",
        justifyContent: "center",
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "normal",
        WebkitBoxPack: "center",
        flexDirection: "column",
        textAlign: "center",
        height: "75px",
        width: "75px"
      },
      "& > div + div": {
        marginTop: "-5px"
      }
    },
    warrantyBadge: {
      background: theme.palette.warning.main,
      opacity: 0.9
    },
    customBadge: {
      background: theme.palette.danger.main,
      opacity: 0.8
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {}
  };
});
