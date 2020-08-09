import React, { useState } from "react";
import { observer } from "mobx-react";

//components
import BakeryItem from "./BakeryItem";
import SearchBar from "../SearchBar";
import AddButton from "../buttons/AddButton";

//store
import bakeryStore from "../../stores/bakeryStore";

//styles
import { Title, ListWrapper } from "../../styles";

const BakeryList = () => {
  const [query, setQuery] = useState("");

  const bakeryList = bakeryStore.bakeries
    .filter((bakery) => bakery.name.toLowerCase().includes(query.toLowerCase()))
    .map((bakery) => <BakeryItem bakery={bakery} key={bakery.id} />);

  return (
    <div className="container">
      <Title>Bakeries</Title>

      <SearchBar setQuery={setQuery} />
      <ListWrapper>{bakeryList}</ListWrapper>

      <AddButton />
    </div>
  );
};

export default observer(BakeryList);
