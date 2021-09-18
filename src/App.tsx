import React from "react";
import "./App.css";
import Routes from "routes/route";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "theme";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { createHistory } from "store";
import { PersistGate } from "redux-persist/integration/react";
import { AlertProvider } from "components/shared/alert/alert-provider";

const history = createBrowserHistory();
const { store, persistor } = createHistory(history);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>loading</div>}>
          <AlertProvider>
            <Routes />
          </AlertProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
