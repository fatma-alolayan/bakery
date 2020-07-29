import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

// component
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

// styles
import { BakeryWrapper } from "../styles";

const Item = ({ item }) => {
  return (
    <BakeryWrapper>
      <Link to={`/Bakery/${item.slug}`}>
        <img alt={item.name} src={item.image} />
      </Link>
      <p>{item.name}</p>
      <p className="item-price"> {item.price} KD</p>
      <UpdateButton item={item} />
      <DeleteButton itemId={item.id} />
    </BakeryWrapper>
  );
};

export default observer(Item);
