import React, { useState } from "react";
import { Route, Switch } from "react-router";

//styles
import { ThemeButton, GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
// Data
import items from "./items";
// component
import Home from "./components/Home";
import BakeryList from "./components/BakeryList";
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
  // const [item, setItem] = useState(null);
  const [_item, setItems] = useState(items);

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const deleteItem = (itemId) => {
    const updatedItems = _item.filter((item) => item.id !== +itemId);
    setItems(updatedItems);
  };

  // const selectItem = (itemId) => {
  //   const selectedItem = items.find((item) => item.id === itemId);
  //   setItem(selectedItem);
  // };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />

      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Theme
      </ThemeButton>

      <Switch>
        <Route path="/Bakery/:itemId">
          <ItemDetail item={_item} deleteItem={deleteItem} />
        </Route>

        <Route path="/Bakery">
          <BakeryList item={_item} deleteItem={deleteItem} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
