import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
}
html{
    width: 100vw;
    height: 100vh;

}
  body {
    font-family: 'Roboto',sans-serif;
    margin: 0;
    padding: 0;
  
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;