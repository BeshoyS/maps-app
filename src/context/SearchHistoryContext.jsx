import { createContext, useEffect, useState } from "react";

const initialState = localStorage.getItem("searchHistory")
  ? JSON.parse(localStorage.getItem("searchHistory"))
  : [];
export const SearchHistoryContext = createContext(initialState);

export function SearchHistoryContextProvider({ children }) {
  const [history, setHistory] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }, [history]);

  return (
    <SearchHistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
}
