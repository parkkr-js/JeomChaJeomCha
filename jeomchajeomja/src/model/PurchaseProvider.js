import { createContext, useState } from "react";

export const PurchaseContext = createContext({});

const PurchaseProvider = ({ children }) => {
  const purchaseState = useState({});

  return (
    <PurchaseContext.Provider value={purchaseState}>
      {children}
    </PurchaseContext.Provider>
  );
};

export default PurchaseProvider;
