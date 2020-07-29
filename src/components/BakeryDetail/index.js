import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
//components
import List from "../List";
import AddButton from "../buttons/AddButton";
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";
//style
import { DetailWrapper } from "../../styles";
import bakeryStore from "../../stores/bakeryStore";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();

  const bakery = bakeryStore.bakeries.find(
    (bakery) => bakery.slug === bakerySlug
  );

  if (!bakery) return <Redirect to="/bakeries" />;

  return (
    <>
      <DetailWrapper>
        <h4>{bakery.name}</h4>
        <img src={bakery.image} alt={bakery.name} />
        <UpdateButton bakery={bakery} />
      </DetailWrapper>
      <List items={bakery.items} />
      <AddButton bakeryId={bakery.id} />
      <DeleteButton bakeryId={bakery.id} />
    </>
  );
};

export default observer(BakeryDetail);
