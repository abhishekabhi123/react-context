import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  addItemsToCart: (item) => {},
});
