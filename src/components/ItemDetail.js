import React from "react";

import { DeleteButtonStyled, DetailWrapper } from "../styles";

const ItemDetail = (props) => {
  const item = props.item;

  const handleDelete = () => {
    props.deleteItem(item.id);
  };

  return (
    <DetailWrapper>
      <h1>{item.name}</h1>
      <img
        src={item.image}
        alt={item.name}
        onClick={() => props.selectItem(item.id)}
      />
      <p>{item.description}</p>
      <p>{item.price} KD</p>

      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </DetailWrapper>
  );
};
export default ItemDetail;
