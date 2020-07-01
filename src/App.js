import React, { useState } from "react";

import styles, { GlobalStyle } from "./styles";
import BakeryList from "./components/BakeryList";
import { Description, ShopImage, Title, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#f6d2d6", // main background color
    black: "#0e1111",
  },
  dark: {
    mainColor: "#f6d2d6", // main font color
    backgroundColor: "#242424", // main background color
    black: "#f6d2d6",
  },
};

function App() {
  let [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>Dark Theme</ThemeButton>
      <Title>Bakery</Title>
      <Description>Fresh</Description>
      <ShopImage
        src="https://coleofduty.com/wp-content/uploads/2020/05/Bread-Bakery.jpg"
        alt="bakery"
      />
      <br></br>

      <BakeryList />
    </ThemeProvider>
  );
}

export default App;
