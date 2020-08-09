import styled from "styled-components";

export const BakeryItemImage = styled.img`
  width: 300px;
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
