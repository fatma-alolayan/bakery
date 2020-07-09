import React from "react";

//logo
import logo from "../chef.png";

// Styling
import { Logo, ThemeButton, NavStyled, NavItem } from "../styles";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <NavStyled className="navbar navbar-expand-lg ">
      <Logo className="navbar-brand" to="/">
        <img alt="logo" src={logo} />
      </Logo>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavItem className="nav-item" to="/Bakery">
            Bakery
          </NavItem>
          <ThemeButton className="nav-item " onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};
export default NavBar;
