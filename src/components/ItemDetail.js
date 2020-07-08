import React from "react";
import { useParams, Link, Redirect } from "react-router-dom";

import DeleteButton from "./buttons/DeleteButton";

import { ListWrapper, DetailWrapper, Description, HomeButton } from "../styles";

const ItemDetail = (props) => {
  const { itemSlug } = useParams();

  const item = props.item.find((item) => item.slug === itemSlug);

  if (!item) return <Redirect to="/Bakery" />;

  return (
    <>
      <ListWrapper>
        <DetailWrapper>
          <Link to="/Bakery">
            <HomeButton>Back</HomeButton>
          </Link>

          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
          <p>{item.price} KD</p>

          <DeleteButton itemId={item.id} deleteItem={props.deleteItem} />
        </DetailWrapper>
      </ListWrapper>
    </>
  );
};
export default ItemDetail;
