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

  createItem = (newItem) => {
    newItem.id = this.items[this.items.length - 1].id + 1;
    newItem.slug = slugify(newItem.name);
    this.items.push(newItem);
  };

  updateItem = (updatedItem) => {
    const item = this.items.find((item) => item.id === updatedItem.id);

    for (const key in item) item[key] = updatedItem[key];
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
