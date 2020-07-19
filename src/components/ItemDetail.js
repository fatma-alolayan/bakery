import React from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
// store
import itemStore from "../stores/itemStore";
import UpdateButton from "./buttons/UpdateButton";
import DeleteButton from "./buttons/DeleteButton";

import { ListWrapper, DetailWrapper } from "../styles";

const ItemDetail = () => {
  const { itemSlug } = useParams();

  const item = itemStore.items.find((item) => item.slug === itemSlug);

  if (!item) return <Redirect to="/Bakery" />;

  return (
    <ListWrapper>
      <DetailWrapper>
        <h1>{item.name}</h1>

        <img src={item.image} alt={item.name} />
        <p>{item.description}</p>
        <p>{item.price} KD</p>
        <UpdateButton item={item} />
        <DeleteButton itemId={item.id} />
      </DetailWrapper>
    </ListWrapper>
  );
};
export default observer(ItemDetail);
