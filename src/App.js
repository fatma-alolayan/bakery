import React from "react";
import styles, { GlobalStyle } from "./styles";
import BakeryList from "./components/BakeryList";
import { Description, ShopImage, Title } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#242424", // main font color
  backgroundColor: "#f6d2d6", // main background color
  black: "#0e1111",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

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
