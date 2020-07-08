import React from "react";
import { Link } from "react-router-dom";

// Styling
import { ThemeButton } from "../styles";
//logo

import logo from "./chef.png";
const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/">
        <img src={logo} alt="logo" />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link className="nav-item" to="/items">
            Bakery
          </Link>
          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark" : "Light"} Theme
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};
export default NavBar;
