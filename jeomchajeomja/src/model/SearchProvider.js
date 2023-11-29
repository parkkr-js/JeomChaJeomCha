import { createContext, useState } from "react";

export const SearchContext = createContext("");

const SearchProvider = ({ children }) => {
  const searchState = useState("");

  return (
    <SearchContext.Provider value={searchState}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
