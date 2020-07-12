import React, { useState } from "react";
import Modal from "react-modal";
//styles
import { CreateButtonStyled } from "../../styles";

const BakeryModal = ({ isOpen, closeModal, createItem }) => {
  const [item, setItem] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });
  const handleChange = (event) => {
    const newItem = { ...item, [event.target.name]: event.target.value };
    setItem(newItem);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createItem(item);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} contentLabel="Bakery Modal">
      <h3>New Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              name="price"
              type="number"
              min="1"
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            type="text"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            type="text"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <CreateButtonStyled>create</CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default BakeryModal;
