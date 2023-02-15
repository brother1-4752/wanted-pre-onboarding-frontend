import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    color : #3366ff;
  }
  
  body {
    font-family: Arial, sans-serif;
  }
`;

export default GlobalStyle;
