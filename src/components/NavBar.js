import React from "react";
import { observer } from "mobx-react";
import { FiLogOut } from "react-icons/fi";

//logo
import logo from "../chef.png";

// Styling
import { Logo, NavStyled, NavItem, ThemeButton } from "../styles";

//component
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";

//store
import authStore from "../stores/authStore";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <NavStyled className="navbar navbar-expand-lg ">
      <Logo className="navbar-brand" to="/">
        <img alt="logo" src={logo} />
      </Logo>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          {authStore.user && (
            <>
              <p>Hello, {authStore.user.username}</p>
              <FiLogOut onClick={authStore.signout} size="2em" color="red" />
            </>
          )}
          {authStore.user?.role === "admin" && (
            <>
              <NavItem className="nav-item" to="/bakeries">
                Bakeries
              </NavItem>
              <NavItem className="nav-item" to="/items">
                Bakery
              </NavItem>
            </>
          )}
          <SignupButton />
          <SigninButton />

          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch1"
              onChange={toggleTheme}
            />
            <ThemeButton className="nav-item" onClick={toggleTheme}>
              {currentTheme === "light" ? "Dark" : "Light"} Mode
            </ThemeButton>
          </div>
        </div>
      </div>
    </NavStyled>
  );
};
export default observer(NavBar);
