import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  return {
    counter: {
      display: "flex",
      alignItems: "strech",
      width: 120,
      "& .MuiButtonBase-root": {
        padding: theme.spacing(0.5),
        minWidth: 32,
      },
      "& .MuiButtonBase-root:nth-child(1)": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      "& .MuiButtonBase-root:nth-child(3)": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
      "& input": {
        width: 60,
        outline: "none",
        border: `1px solid ${grey[300]}`,
        textAlign: "center",
        mozAppearance: "textfield",
        "&::-webkit-outer-spin-button": {
          webkitAppearance: "none",
          margin: 0,
        },
        "&::-webkit-inner-spin-button": {
          webkitAppearance: "none",
          margin: 0,
        },
      },
    },
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  };
});
