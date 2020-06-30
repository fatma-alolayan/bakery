import React from "react";
// styles
import styles from "../styles";
//data
import items from "../items";
//componants
import BakeryItem from "./BakeryItem";

import { ListWrapper } from "../styles";

const BakeryList = () => {
  const itemsList = items.map((item) => (
    <BakeryItem item={item} key={item.id} />
  ));

  return <ListWrapper>{itemsList}</ListWrapper>;
};

export default BakeryList;
