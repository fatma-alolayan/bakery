import React, { useState } from "react";

// Components
import ItemModal from "../modals/ItemModal";
import BakeryModal from "../modals/BakeryModal";

// Styles
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ bakery, item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      {bakery ? (
        <BakeryModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldBakery={bakery}
        />
      ) : (
        <ItemModal isOpen={isOpen} closeModal={closeModal} oldItem={item} />
      )}
    </>
  );
};

export default UpdateButton;
