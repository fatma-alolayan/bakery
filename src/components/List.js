import React, { useState } from "react";
import { observer } from "mobx-react";

// style
import { Title, ListWrapper } from "../styles";

//componants
import Item from "./Item";
import SearchBar from "./SearchBar";
import AddButton from "../components/buttons/AddButton";

const List = ({ items = [] }) => {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const itemsList = filteredItems.map((item) => (
    <Item item={item} key={item.id} />
  ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{itemsList}</ListWrapper>
    </div>
  );
};

export default observer(List);
