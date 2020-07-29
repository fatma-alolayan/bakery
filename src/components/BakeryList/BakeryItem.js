import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//styles
import { BakeryItemImage } from "./styles";

const BakeryItem = ({ bakery }) => {
  return (
    <Link to={`/bakeries/${bakery.slug}`}>
      <BakeryItemImage src={bakery.image} alt={bakery.name} />
    </Link>
  );
};

export default observer(BakeryItem);
