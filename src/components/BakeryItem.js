import React from "react";
// styles
import styles from "../styles";

import { BakeryWrapper, DeleteButtonStyled } from "../styles";

const BakeryItem = (props) => {
  const item = props.item;

  const handleDelete = () => {
    props.deleteItem(item.id);
  };
  return (
    <BakeryWrapper>
      <img alt={props.item.name} src={props.item.image} />
      <p>{props.item.name}</p>

      <p className="item-price"> {props.item.price} KD</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </BakeryWrapper>
  );
};

export default BakeryItem;
