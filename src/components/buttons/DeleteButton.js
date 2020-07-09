import React from "react";

// styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ itemId, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(itemId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
