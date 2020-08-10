import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

//components
import BakeryItem from "./BakeryItem";
import SearchBar from "../SearchBar";
import AddButton from "../buttons/AddButton";

//store
import bakeryStore from "../../stores/bakeryStore";
import authStore from "../../stores/authStore";

//styles
import { Title, ListWrapper } from "../../styles";

const BakeryList = () => {
  const [query, setQuery] = useState("");

  if (!authStore.user || authStore.user.role !== "admin")
    return <Redirect to="/" />;

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
