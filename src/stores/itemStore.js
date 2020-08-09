import { decorate, observable } from "mobx";

import axios from "axios";

// data
// import items from "../items";

class ItemStore {
  items = [];
  loading = true;

  fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:8000/items");
      this.items = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ItemStore -> fetchItems -> error", error);
    }
  };

  getItemById = (itemId) => this.items.find((item) => item.id === itemId);

  createItem = async (newItem, bakery) => {
    try {
      const formData = new FormData();
      for (const key in newItem) formData.append(key, newItem[key]);
      const res = await axios.post(
        `http://localhost:8000/bakeries/${bakery.id}/items`,
        formData
      );
      const item = res.data;
      this.items.push(item);
      bakery.items.push({ id: item.id });
    } catch (error) {
      console.log("ItemStore -> createItem -> error", error);
    }
  };

  updateItem = async (updatedItem) => {
    try {
      const formData = new FormData();
      for (const key in updatedItem) formData.append(key, updatedItem[key]);
      await axios.put(
        `http://localhost:8000/items/${updatedItem.id}`,
        formData
      );
      const item = this.items.find((item) => item.id === updatedItem.id);
      for (const key in updatedItem) item[key] = updatedItem[key];
      item.image = URL.createObjectURL(updatedItem.image);
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

decorate(ItemStore, {
  items: observable,
  loading: observable,
});

const itemStore = new ItemStore();

itemStore.fetchItems();

export default itemStore;
