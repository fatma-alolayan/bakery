import styled, { createGlobalStyle } from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: brown;
`;
const Description = styled.h2`
  text-align: center;
`;
const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const BakeryWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.item-price {
      color: ${(props) => props.theme.black};
    }
  }
`;
const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;
export {
  BakeryWrapper,
  Description,
  ListWrapper,
  Title,
  ShopImage,
  GlobalStyle,
};
