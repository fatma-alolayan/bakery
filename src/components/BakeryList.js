import React from "react";

// //data
import items from "../items";
//componants
import BakeryItem from "./BakeryItem";

import { ListWrapper } from "../styles";

const BakeryList = (props) => {
  const itemsList = props.items.map((item) => (
    <BakeryItem
      item={item}
      key={item.id}
      deleteItem={props.deleteItem}
      selectItem={props.selectItem}
    />
  ));

  return <ListWrapper>{itemsList}</ListWrapper>;
};

export default BakeryList;
