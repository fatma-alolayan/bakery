import React, { useState } from "react";
import { observer } from "mobx-react";

// style
import { ListWrapper } from "../styles";

//componants
import Item from "./Item";
import SearchBar from "./SearchBar";

const List = ({ items }) => {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const itemsList = filteredItems.map((item) => (
    <Item item={item} key={item.id} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{itemsList}</ListWrapper>
    </>
  );
};

export default observer(List);
