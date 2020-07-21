import { decorate, observable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

// data
// import items from "../items";

class ItemStore {
  items = [];

  fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:8000/items");
      this.items = response.data;
    } catch (error) {
      console.error("ItemStore -> fetchItems -> error", error);
    }
  };

  createItem = async (newItem) => {
    try {
      const res = await axios.post("http://localhost:8000/items", newItem);
      this.items.push(res.data);
    } catch (error) {
      console.log("ItemStore -> createItem -> error", error);
    }

    // newItem.id = this.items[this.items.length - 1].id + 1;
    // newItem.slug = slugify(newItem.name);
    // this.items.push(newItem);
  };

  updateItem = async (updatedItem) => {
    try {
      await axios.put(
        `http://localhost:8000/items/${updatedItem.id}`,
        updatedItem
      );
      const item = this.items.find((item) => item.id === updatedItem.id);
      for (const key in updatedItem) updatedItem[key] = updatedItem[key];
    } catch (error) {
      console.log("ItemStore -> updateItem -> error", error);
    }
  };

  deleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8000/items/${itemId}`);
      this.items = this.items.filter((item) => item.id !== +itemId);
    } catch (error) {
      console.log("itemStore -> deleteItem -> error", error);
    }
  };
}

decorate(ItemStore, { items: observable });

const itemStore = new ItemStore();

itemStore.fetchItems();

export default itemStore;
