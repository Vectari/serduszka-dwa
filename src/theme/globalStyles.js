import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: ${theme.colors.background};
  }
`;

export default GlobalStyle;
