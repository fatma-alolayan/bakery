import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import BakeryModal from "../modals/BakeryModal";

const AddButton = ({ createItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <div>
      <MdAddCircleOutline
        className="float-right"
        size="2em"
        onClick={openModal}
      />
      <BakeryModal
        isOpen={isOpen}
        closeModal={closeModal}
        createItem={createItem}
      />
    </div>
  );
};

export default AddButton;
