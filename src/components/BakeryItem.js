import React from "react";
// styles
import styles from "../styles";

import { BakeryWrapper } from "../styles";

const BakeryItem = (props) => {
  return (
    <BakeryWrapper>
      <img alt={props.item.name} src={props.item.image} />
      <p>{props.item.name}</p>
      <p className="item-price"> {props.item.price} KD</p>
    </BakeryWrapper>
  );
};

export default BakeryItem;
