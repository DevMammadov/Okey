import React from "react";
import "./App.css";
import Routes from "routes/route";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
