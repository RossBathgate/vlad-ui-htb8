import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "blue",
  },
  fonts: {
    default: "Arial",
  },
  breakpoints: {
    mobile: 0,
    tablet: 737,
    desktop: 1195,
  },
};

// Create theme provider
const ThemeContextProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
export default ThemeContextProvider;

// Create global styling
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, #app {
    height: 100%;
  }

  body {
    position: relative;
    height: 100%;
    width: 100%;
  }
`;

export { GlobalStyle };
