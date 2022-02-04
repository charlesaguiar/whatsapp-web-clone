import { createGlobalStyle } from 'styled-components';
import colors from './design/colors';
import fontSizes from './design/fontSizes';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  }

  * {
  ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px ${colors.primary};
    }
    ::-webkit-scrollbar-thumb {
      background: ${colors.subText};
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.background};
    color: ${colors.subText};
    font-size: ${fontSizes.sub};
  }

  input, label {
    display: block;
  }
`;

export default GlobalStyle;