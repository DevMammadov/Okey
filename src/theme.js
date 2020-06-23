import { createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
// import { green, orange } from "@material-ui/core/colors";

// A custom theme for this app
const theme = createMuiTheme({
  props: {
    MuiMenuItem: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiIconButton: {
      root: {
        borderRadius: "5px",
      },
    },
    MuiButton: {
      root: {
        textTransform: "capitalize",
        padding: "4px 8px",
      },
      contained: {
        backgroundColor: "#F26C37",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#f28a61",
          textDecoration: "unset",
        },
      },
    },
    MuiGrid: {
      item: {
        padding: "15px",
      },
    },
  },
  palette: {
    color: {
      black: grey[800],
      lightBlack: "#363636",
    },
    primary: {
      main: "#0883C6",
    },
    warning: {
      main: "#F26C37",
      light: "#f28a61",
    },
    danger: {
      main: "#EA2227",
    },
  },
});

export default theme;
