import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: auto;
    padding: 0;
    text-align: center;
    background-color: ${theme.colors.background};
    max-width: 1100px;
  }
`;

export default GlobalStyle;
