import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    badgeContainer: {
      position: "absolute",
      top: theme.spacing(2),
      right: theme.spacing(2),
      color: theme.palette.common.white,
      width: "75px",
      flexWrap: "wrap",
      "& > div": {
        fontWeight: 600,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "normal",
        WebkitBoxPack: "center",
        flexDirection: "column",
        textAlign: "center",
        height: "75px",
        width: "75px",
      },
      "& > div + div": {
        marginTop: "-5px",
      },
    },
    warrantyBadge: {
      background: theme.palette.warning.main,
      opacity: 0.9,
    },
    customBadge: {
      background: theme.palette.danger.main,
      opacity: 0.8,
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
