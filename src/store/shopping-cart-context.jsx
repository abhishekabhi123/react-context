import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  addItemsToCart: (item) => {},
  updateItemQuantity: () => {},
});

export default function CartContextProvider() {}
