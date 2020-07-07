import React from "react";
// styles

import { BakeryWrapper } from "../styles";

import DeleteButton from "./buttons/DeleteButton";

const BakeryItem = (props) => {
  const item = props.item;

  // const handleDelete = () => {
  //   props.deleteItem(item.id);
  // };

  return (
    <BakeryWrapper>
      <img
        alt={item.name}
        src={item.image}
        onClick={() => props.selectItem(item.id)}
      />
      <p>{props.item.name}</p>
      <p className="item-price"> {props.item.price} KD</p>

      <DeleteButton itemId={item.id} deleteItem={props.deleteItem} />
    </BakeryWrapper>
  );
};

export default BakeryItem;
