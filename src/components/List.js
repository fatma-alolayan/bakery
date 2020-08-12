import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";
//store
import authStore from "../stores/authStore";

// style
import { ListWrapper } from "../styles";

//componants
import Item from "./Item";
import SearchBar from "./SearchBar";

const List = ({ items = [] }) => {
  const [query, setQuery] = useState("");

  if (!authStore.user || authStore.user.role !== "admin")
    return <Redirect to="/" />;

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
