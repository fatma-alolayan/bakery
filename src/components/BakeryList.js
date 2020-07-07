import React, { useState } from "react";
import { ListWrapper } from "../styles";

// //data
import items from "../items";

//componants
import BakeryItem from "./BakeryItem";
import SearchBar from "./SearchBar";

const BakeryList = (props) => {
  const [query, setQuery] = useState("");

  const itemsList = props.items
    .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    .map((item) => (
      <BakeryItem
        item={item}
        key={item.id}
        deleteItem={props.deleteItem}
        selectItem={props.selectItem}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{itemsList}</ListWrapper>;
    </>
  );
};

export default BakeryList;
