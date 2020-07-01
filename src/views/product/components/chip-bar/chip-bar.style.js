import { makeStyles } from "@material-ui/core/styles";
import { blue, green, red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      "& .MuiChip-root": {
        height: "30px",
        marginRight: theme.spacing(1),
        color: theme.palette.color.black,
        "& .MuiIcon-root": {
          fontSize: "0.9rem",
        },
      },
    },
    blue: {
      "& .MuiAvatar-root": {
        background: blue[800],
        color: theme.palette.common.white,
      },
    },
    red: {
      "& .MuiAvatar-root": {
        background: red[800],
        color: theme.palette.common.white,
      },
    },
    green: {
      "& .MuiAvatar-root": {
        background: green[800],
        color: theme.palette.common.white,
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  };
});
