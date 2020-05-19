import { createMuiTheme } from "@material-ui/core/styles";
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
    MuiGrid: {
      item: {
        padding: "15px",
      },
    },
  },
  palette: {
    general: {},
    color: {
      black: "#1F1F1F",
      lightBlack: "#363636",
    },
    primary: {
      main: "#0883C6",
    },
    warning: {
      main: "#F26C37",
    },
    danger: {
      main: "#EA2227",
    },
  },
});

export default theme;
