import React from "react";
import { Link } from "react-router-dom";
// styles
import { BakeryWrapper } from "../styles";

import DeleteButton from "./buttons/DeleteButton";

const BakeryItem = ({ item, deleteItem }) => {
  return (
    <BakeryWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/Bakery/${item.slug}`}>
        <img alt={item.name} src={item.image} />
      </Link>
      <p className="item-name">{item.name}</p>
      <p className="item-price"> {item.price} KD</p>

      <DeleteButton itemId={item.id} deleteItem={deleteItem} />
    </BakeryWrapper>
  );
};

export default BakeryItem;
