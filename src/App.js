import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./router";
import "./resources/styles/global.css";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./resources/styles/theme";

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
