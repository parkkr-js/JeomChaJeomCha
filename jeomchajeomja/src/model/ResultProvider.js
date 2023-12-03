import { createContext, useState } from "react";

export const ResultContext = createContext([]);

const ResultProvider = ({ children }) => {
  const resultState = useState([]);

  return (
    <ResultContext.Provider value={resultState}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultProvider;
