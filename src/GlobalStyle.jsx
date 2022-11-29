import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// RESET
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Kumbh Sans', sans-serif;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

// General Styles
.container{
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}
`;

export default GlobalStyle;