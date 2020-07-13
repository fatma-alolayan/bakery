import React from "react";
import { Link } from "react-router-dom";
// styles
import { BakeryWrapper } from "../styles";
// component
import DeleteButton from "./buttons/DeleteButton";

const BakeryItem = ({ item }) => {
  return (
    <BakeryWrapper>
      <Link to={`/Bakery/${item.slug}`}>
        <img alt={item.name} src={item.image} />
      </Link>
      <p>{item.name}</p>
      <p className="item-price"> {item.price} KD</p>

      <DeleteButton itemId={item.id} />
    </BakeryWrapper>
  );
};

export default BakeryItem;
