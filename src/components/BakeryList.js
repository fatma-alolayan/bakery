import React, { useState } from "react";
import { Link } from "react-router-dom";
// style
import { ListWrapper, HomeButton } from "../styles";

//componants
import BakeryItem from "./BakeryItem";
import SearchBar from "./SearchBar";

const BakeryList = (props) => {
  const [query, setQuery] = useState("");

  const filteredItems = props.item.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const itemsList = filteredItems.map((item) => (
    <BakeryItem item={item} key={item.id} deleteItem={props.deleteItem} />
  ));

  return (
    <>
      <Link to="/">
        <HomeButton>Home</HomeButton>
      </Link>
      <div className="container">
        <SearchBar setQuery={setQuery} />
        <ListWrapper className="row">{itemsList}</ListWrapper>;
      </div>
    </>
  );
};

export default BakeryList;
