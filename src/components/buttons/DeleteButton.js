import React from "react";
import { useHistory } from "react-router-dom";
// styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const history = useHistory();

  const handleDelete = () => {
    props.deleteItem(props.itemId);
    history.push("/Bakery");
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
