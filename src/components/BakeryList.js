import React from "react";
// styles
import styles from "../styles";
//data
import items from "../items";
//componants
import BakeryItem from "./BakeryItem";

const BakeryList = () => {
  const itemsList = items.map((item) => (
    <BakeryItem item={item} key={item.id} />
  ));

  return <div style={styles.list}>{itemsList}</div>;
};

export default BakeryList;
