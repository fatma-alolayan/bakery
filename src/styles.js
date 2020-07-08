import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Title = styled.h1`
  text-align: center;
  color: brown;
`;
export const Description = styled.h2`
  text-align: center;
`;
export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid gray;
  padding: 3px;
  width: 400px;
`;
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const BakeryWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
    border: 2px solid gray;
    padding: 3px;
  }
  p {
    text-align: center;
    &.item-price {
      color: ${(props) => props.theme.black};
    }
  }
`;
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const ThemeButton = styled.button`
   {
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.backgroundColor};

    // background-color: #c0babc;
    // color: #0e1111;
    // padding: 15px 32px;
    // text-align: center;
    // display: inline-block;
    // font-size: 16px;
    // cursor: pointer;
    // margin-right: 0px;
  }
`;

export const DeleteButtonStyled = styled.p`
  color: red;
`;

export const DetailWrapper = styled.div`
  text-align: center;
  img {
    width: 250px;
    border: 2px solid gray;
    padding: 3px;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const HomeButton = styled.button`
   {
    background-color: #c0babc;
    color: #0e1111;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
`;
export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;
export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: ${(props) => props.theme.pink};
    background-color: gray;
  }
`;
