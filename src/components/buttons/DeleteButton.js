import React from "react";
import { observer } from "mobx-react";

// store
import itemStore from "../../stores/itemStore";

// styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ itemId }) => {
  const handleDelete = () => {
    itemStore.deleteItem(itemId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default observer(DeleteButton);
