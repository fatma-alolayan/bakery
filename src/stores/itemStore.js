import { decorate, observable } from "mobx";
import slugify from "react-slugify";

// data
import items from "../items";

class ItemStore {
  items = items;

  createItem = (newItem) => {
    newItem.id = this.items[this.items.length - 1].id + 1;
    newItem.slug = slugify(newItem.name);
    this.items.push(newItem);
  };

  updateItem = (updatedItem) => {
    const item = this.items.find((item) => item.id === updatedItem.id);

    for (const key in item) item[key] = updatedItem[key];
  };

  deleteItem = (itemId) => {
    this.items = this.items.filter((item) => item.id !== +itemId);
  };
}

decorate(ItemStore, { items: observable });

const itemStore = new ItemStore();

export default itemStore;
