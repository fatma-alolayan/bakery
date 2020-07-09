import React, { useState } from "react";
import { Link } from "react-router-dom";
// style
import { ListWrapper, HomeButton } from "../styles";

//componants
import BakeryItem from "./BakeryItem";
import SearchBar from "./SearchBar";

const BakeryList = ({ item, deleteItem }) => {
  const [query, setQuery] = useState("");

  const filteredItems = item.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const itemsList = filteredItems.map((item) => (
    <BakeryItem item={item} key={item.id} deleteItem={deleteItem} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{itemsList}</ListWrapper>;
    </>
  );
};

export default BakeryList;
