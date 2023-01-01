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

#root{
  height: calc(100vh - 50px);
  @media (max-width: ${({ theme }) => theme.media.medium}){
    height: 100%;
  }
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

a{
  transition: all 0.3s ease-in-out;
  &:hover{
    transition: all 0.3s ease-in-out;
  }
}
// General Styles
.container{
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}
.footer {
  width: 100%;
  background-color: hsl(0, 0%, 8%);
  padding: 1.15rem;
  font-size: 0.7rem;
  color: hsl(0, 0%, 41%);
}
.attribution {
  text-align: center;
}
.footer a{
  color: hsl(0, 0%, 65%);
  text-decoration: none;
}
.footer a:hover{
  color: hsl(0, 0%, 100%);
}
`;

export default GlobalStyle;
