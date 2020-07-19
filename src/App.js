import React, { useState } from "react";
import { Route, Switch } from "react-router";
import slugify from "react-slugify";

//styles
import { GlobalStyle } from "./styles";
// theme
import { ThemeProvider } from "styled-components";

// component
import Home from "./components/Home";
import BakeryList from "./components/BakeryList";
import ItemDetail from "./components/ItemDetail";
import NavBar from "./components/NavBar";

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
  const savedTheme = localStorage.getItem("theme") ?? "light";
  const [currentTheme, setCurrentTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <Switch>
        <Route path="/Bakery/:itemSlug">
          <ItemDetail />
        </Route>

        <Route path="/Bakery">
          <BakeryList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
