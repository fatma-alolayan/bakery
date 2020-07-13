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

  deleteItem = (itemId) => {
    this.items = this.items.filter((item) => item.id !== +itemId);
  };
}

decorate(ItemStore, { items: observable });

const itemStore = new ItemStore();

export default itemStore;
