import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import ItemModal from "../modals/ItemModal";
import BakeryModal from "../modals/BakeryModal";

const AddButton = ({ bakery }) => {
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
      {bakery ? (
        <ItemModal bakery={bakery} isOpen={isOpen} closeModal={closeModal} />
      ) : (
        <BakeryModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AddButton;
