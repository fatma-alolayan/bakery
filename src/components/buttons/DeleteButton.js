import React from "react";
import { observer } from "mobx-react";

// store
import itemStore from "../../stores/itemStore";

// styles
import { DeleteButtonStyled } from "../../styles";
import bakeryStore from "../../stores/bakeryStore";

const DeleteButton = ({ bakeryId, itemId }) => {
  const handleDelete = () => {
    if (itemId) itemStore.deleteItem(itemId);
    else bakeryStore.deleteBakery(bakeryId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default observer(DeleteButton);
