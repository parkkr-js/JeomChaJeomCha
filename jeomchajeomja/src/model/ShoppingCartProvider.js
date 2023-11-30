import { createContext, useState } from "react";

export const ShoppingCartContext = createContext([]);

const ShoppingCartProvider = ({ children }) => {
  const shoppingCartState = useState([]);

  return (
    <ShoppingCartContext.Provider value={shoppingCartState}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
