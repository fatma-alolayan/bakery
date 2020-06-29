import React from "react";
// styles
import styles from "../styles";

const BakeryItem = (props) => {
  return (
    <div>
      <img
        src={props.item.image}
        alt={props.item.name}
        style={styles.plainImage}
      />
      <p>{props.item.name}</p>
      <p>{props.item.price} KD</p>
    </div>
  );
};

export default BakeryItem;
