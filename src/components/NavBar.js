import React from "react";

//logo
import logo from "../chef.png";

// Styling
import { Logo, NavStyled, NavItem } from "../styles";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <NavStyled className="navbar navbar-expand-lg ">
      <Logo className="navbar-brand" to="/">
        <img alt="logo" src={logo} />
      </Logo>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavItem className="nav-item" to="/bakeries">
            Bakeries
          </NavItem>
          <NavItem className="nav-item" to="/Bakery">
            Bakery
          </NavItem>

          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch1"
              onChange={toggleTheme}
            />
            <label class="custom-control-label" for="customSwitch1">
              {currentTheme === "light" ? "Dark" : "Light"} Mode
            </label>
          </div>
        </div>
      </div>
    </NavStyled>
  );
};
export default NavBar;
