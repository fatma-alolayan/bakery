import React, { useState } from "react";
import Modal from "react-modal";
//styles
import { CreateButtonStyled } from "../../styles";
// store
import bakeryStore from "../../stores/bakeryStore";

const customStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%,-50%)",
  },
};

const BakeryModal = ({ isOpen, closeModal, oldBakery }) => {
  const [bakery, setBakery] = useState(
    oldBakery ?? {
      name: "",
      image: "",
    }
  );
  const handleChange = (event) => {
    const newBakery = { ...bakery, [event.target.name]: event.target.value };
    setBakery(newBakery);
  };

  const handleImage = (event) =>
    setBakery({ ...bakery, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();

    oldBakery
      ? bakeryStore.updateBakery(bakery)
      : bakeryStore.createBakery(bakery);

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      style={customStyle}
      contentLabel="Bakery Modal"
    >
      <h3>New Bakery</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={bakery.name}
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            type="file"
            onChange={handleImage}
            className="form-control"
          />
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          {oldBakery ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default BakeryModal;
