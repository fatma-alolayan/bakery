import React from "react";
import { useParams, Link } from "react-router-dom";

import DeleteButton from "./buttons/DeleteButton";

import { ListWrapper, DetailWrapper, Description } from "../styles";

const ItemDetail = (props) => {
  const { itemId } = useParams();
  const item = props.item.find((item) => item.id === +itemId);

  return (
    <>
      <Link to="/Bakery">Back {""}</Link>
      <ListWrapper>
        <DetailWrapper>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
          <Description>{item.name}</Description>
          <p>{item.description}</p>
          <p>{item.price} KD</p>

          <DeleteButton itemId={item.id} deleteItem={props.deleteItem} />
        </DetailWrapper>
      </ListWrapper>
    </>
  );
};
export default ItemDetail;
