import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App tab="home" />
    </ThemeProvider>
  </>
);
