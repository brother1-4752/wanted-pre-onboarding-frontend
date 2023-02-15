import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  
  body {
    color : #333333;
    font-family: Arial, sans-serif;
  }
`;

export default GlobalStyle;
