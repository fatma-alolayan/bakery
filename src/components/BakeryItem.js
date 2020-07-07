import React from "react";
import { Link } from "react-router-dom";
// styles
import { BakeryWrapper } from "../styles";

import DeleteButton from "./buttons/DeleteButton";

const BakeryItem = (props) => {
  const item = props.item;

  return (
    <BakeryWrapper>
      <Link to={`/Bakery/${item.id}`}>
        <img alt={item.name} src={item.image} />
      </Link>
      <p>{item.name}</p>
      <p className="item-price"> {item.price} KD</p>

      <DeleteButton itemId={item.id} deleteItem={props.deleteItem} />
    </BakeryWrapper>
  );
};

export default BakeryItem;
