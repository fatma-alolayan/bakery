import React, { useState } from "react";

// Components
import BakeryModal from "../modals/BakeryModal";

// Styles
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <BakeryModal isOpen={isOpen} closeModal={closeModal} oldItem={item} />
    </>
  );
};

export default UpdateButton;
