import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: ${(props) => props.theme.fontSize.sizeRoot};
  }
  body {
    -webkit-tap-highlight-color: transparent;
    background-color: ${(props) => props.theme.colors.mainBg};
    font-family: Arial, 'sans-serif';
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary}
  }
  .no-scroll {
    overflow: hidden;
  }
`;

export default GlobalStyle;
