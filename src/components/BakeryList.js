import React, { useState } from "react";
// styles
import styles from "../styles";
//data
import items from "../items";
//componants
import BakeryItem from "./BakeryItem";

import { ListWrapper } from "../styles";

const BakeryList = () => {
  const [_item, setItems] = useState(items);

  const deleteItem = (itemId) => {
    const updatedItems = _item.filter((item) => item.id !== +itemId);
    setItems(updatedItems);
  };

  const itemsList = _item.map((item) => (
    <BakeryItem item={item} key={item.id} deleteItem={deleteItem} />
  ));

  return <ListWrapper>{itemsList}</ListWrapper>;
};

export default BakeryList;
