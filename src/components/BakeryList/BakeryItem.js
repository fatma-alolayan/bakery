import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//components
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";

//styles
import { BakeryItemImage, BakeryWrapper } from "./styles";

const BakeryItem = ({ bakery, bakeryId }) => {
  return (
    <BakeryWrapper>
      <Link to={`/bakeries/${bakery.slug}`}>
        <BakeryItemImage src={bakery.image} alt={bakery.name} />
      </Link>
      <UpdateButton bakery={bakery} />
      <DeleteButton bakeryId={bakeryId} />
    </BakeryWrapper>
  );
};

export default observer(BakeryItem);
