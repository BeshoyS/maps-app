import { createContext, useState } from "react";


export const SearchHistoryContext = createContext([]);

export function SearchHistoryContextProvider({ children }) {
  const [history, setHistory] = useState([]);

  return (
    <SearchHistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
}
