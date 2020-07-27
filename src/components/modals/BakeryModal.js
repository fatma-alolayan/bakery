import React, { useState } from "react";
import Modal from "react-modal";
//styles
import { CreateButtonStyled } from "../../styles";
// store
import itemStore from "../../stores/itemStore";

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

const BakeryModal = ({ isOpen, closeModal, oldItem }) => {
  const [item, setItem] = useState(
    oldItem ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );
  const handleChange = (event) => {
    const newItem = { ...item, [event.target.name]: event.target.value };
    setItem(newItem);
  };

  const handleImage = (event) =>
    setItem({ ...item, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();

    oldItem ? itemStore.updateItem(item) : itemStore.createItem(item);

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      style={customStyle}
      contentLabel="Bakery Modal"
    >
      <h3>New Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              name="name"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={item.name}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              required
              name="price"
              type="number.float"
              min="1"
              onChange={handleChange}
              className="form-control"
              value={item.price}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            required
            name="description"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={item.description}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            required
            name="image"
            type="file"
            onChange={handleImage}
            className="form-control"
          />
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          {oldItem ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default BakeryModal;
