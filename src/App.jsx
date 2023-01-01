import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import { Overlay } from "./styles/Overlay";
import CartProvider from "./store/CartProvider";

const App = () => {
  const theme = {
    colors: {
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",
      veryDarkBlue: "hsl(220, 13%, 13%)",
      darkGrayishBlue: "hsl(219, 9%, 45%)",
      grayishBlue: "hsl(220, 14%, 75%)",
      lightGrayishBlue: "hsl(223, 64%, 98%)",
      borderColor: "hsl(240, 10%, 94%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },
    media: {
      small: "576px",
      medium: "768px",
      large: "992px",
      xLarge: "1200px",
    },
  };

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {isOverlayVisible ? <Overlay /> : null}
          <Header displayOverlay={setIsOverlayVisible} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
         
        </ThemeProvider>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
