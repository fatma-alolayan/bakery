import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
//components
import List from "../List";
import AddButton from "../buttons/AddButton";

//style
import { DetailWrapper } from "../../styles";
import bakeryStore from "../../stores/bakeryStore";
//store
import itemStore from "../../stores/itemStore";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();

  const bakery = bakeryStore.bakeries.find(
    (bakery) => bakery.slug === bakerySlug
  );

  if (!bakery) return <Redirect to="/bakeries" />;

  const items = bakery.items
    .map((item) => itemStore.getItemById(item.id))
    .filter((item) => item);

  return (
    <>
      <DetailWrapper>
        <h4>{bakery.name}</h4>
        <img src={bakery.image} alt={bakery.name} />
      </DetailWrapper>
      <List items={items} />
      <AddButton bakeryId={bakery.id} />
      {/* <DeleteButton bakeryId={bakery.id} /> */}
    </>
  );
};

export default observer(BakeryDetail);
