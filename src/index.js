import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import ThemeContextProvider, { GlobalStyle } from "./store/theme-context.js";

console.log("here ");

ReactDOM.render(
  <ThemeContextProvider>
    <GlobalStyle />
    <App />
  </ThemeContextProvider>,
  document.getElementById("app")
);
