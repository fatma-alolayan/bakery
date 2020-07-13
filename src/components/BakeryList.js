import React, { useState } from "react";

import { observer } from "mobx-react";

// store
import itemStore from "../stores/itemStore";

// style
import { ListWrapper } from "../styles";

//componants
import BakeryItem from "./BakeryItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

const BakeryList = () => {
  const [query, setQuery] = useState("");

  const filteredItems = itemStore.items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const itemsList = filteredItems.map((item) => (
    <BakeryItem item={item} key={item.id} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{itemsList}</ListWrapper>
      <AddButton />
    </>
  );
};

export default observer(BakeryList);
