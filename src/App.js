import React, { useState } from "react";

import items from "./items";
import BakeryList from "./components/BakeryList";
import {
  Description,
  ShopImage,
  Title,
  ThemeButton,
  GlobalStyle,
} from "./styles";
import { ThemeProvider } from "styled-components";
import ItemDetail from "./components/ItemDetail";

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
  const [currentTheme, setCurrentTheme] = useState("light");
  const [item, setItem] = useState(null);
  const [_item, setItems] = useState(items);

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const deleteItem = (itemId) => {
    const updatedItems = _item.filter((item) => item.id !== +itemId);
    setItems(updatedItems);
    setItem(null);
  };

  const selectItem = (itemId) => {
    const selectedItem = items.find((item) => item.id === itemId);
    setItem(selectedItem);
  };

  const setView = () =>
    item ? (
      <ItemDetail item={item} deleteItem={deleteItem} />
    ) : (
      <BakeryList
        items={_item}
        selectItem={selectItem}
        deleteItem={deleteItem}
      />
    );

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Theme
      </ThemeButton>
      <Title>Bakery</Title>
      <Description>Fresh</Description>
      <ShopImage
        src="https://coleofduty.com/wp-content/uploads/2020/05/Bread-Bakery.jpg"
        alt="bakery"
      />
      <br></br>

      {setView()}
    </ThemeProvider>
  );
}

export default App;
