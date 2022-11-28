import React from "react";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
const App = () => {
  const theme = {
    colors: {
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",
      veryDarkBlue: "hsl(220, 13%, 13%)",
      darkGrayishBlue: "hsl(219, 9%, 45%)",
      grayishBlue: "hsl(220, 14%, 75%)",
      lightGrayishBlue: "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)"
    },
    media: {
      small: "576px",
      medium: "768px",
      large: "992px",
      xLarge: "1200px"
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>App</div>
    </ThemeProvider>
  );
};

export default App;
