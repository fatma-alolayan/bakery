import React, { useState } from "react";

import { observer } from "mobx-react";

//styles
import { GlobalStyle } from "./styles";
// theme
import { ThemeProvider } from "styled-components";

// component
import NavBar from "./components/NavBar";

//routes
import Routes from "./components/Routes";

//store
import bakeryStore from "./stores/bakeryStore";
import itemStore from "./stores/itemStore";

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
      {bakeryStore.loading || itemStore.loading ? <h1>Loading</h1> : <Routes />}
    </ThemeProvider>
  );
}

export default observer(App);
