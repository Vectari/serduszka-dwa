import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
body {
  /* background-color: ${theme.colors.background}; */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;

  /* Desktop */
  @media (min-width: 1024px) {
    font-size: 18px;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Tablet */
  @media (max-width: 1023px) {
    font-size: 16px;
    padding: 0 20px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    font-size: 14px;
    padding: 0 10px;
  }
}`;
