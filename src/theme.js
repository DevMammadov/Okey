import { createMuiTheme } from "@material-ui/core/styles";
// import { green, orange } from "@material-ui/core/colors";

// A custom theme for this app
const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        color: "#666"
      }
    },
    MuiIconButton: {
      root: {
        borderRadius: "5px"
      }
    },
    MuiGrid: {
      item: {
        padding: "15px"
      }
    }
  },
  palette: {
    general: {
      main: "#2F4163",
      mainLight: "#9FA2B4",
      text: "rgba(255, 255, 255, 0.49)",
      back: "#f5f5f5",
      blue: "#1F97DD"
    },
    color: {
      danger: "#F1543F",
      primary: "#3548ED",
      white: "#fff",
      lightGray: "rgba(196, 196, 196, 0.19)",
      gray: "rgba(191, 182, 182, 0.45)"
    }
  }
});

export default theme;
