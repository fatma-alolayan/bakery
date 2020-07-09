import React from "react";
import { useParams, Link, Redirect } from "react-router-dom";

import DeleteButton from "./buttons/DeleteButton";

import { ListWrapper, DetailWrapper } from "../styles";

const ItemDetail = ({ items, deleteItem }) => {
  const { itemSlug } = useParams();

  const item = items.find((item) => item.slug === itemSlug);

  if (!item) return <Redirect to="/Bakery" />;

  return (
    <ListWrapper>
      <DetailWrapper>
        <h1>{item.name}</h1>

        <img src={item.image} alt={item.name} />
        <p>{item.description}</p>
        <p>{item.price} KD</p>

        <DeleteButton itemId={item.id} deleteItem={deleteItem} />
      </DetailWrapper>
    </ListWrapper>
  );
};
export default ItemDetail;
