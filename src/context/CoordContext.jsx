import { createContext, useState } from "react";

export const CoordContext = createContext("");

export function CoordContextProvider({ children }) {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(false);

  return (
    <CoordContext.Provider
      value={{ coordinates, setCoordinates, error, setError }}
    >
      {children}
    </CoordContext.Provider>
  );
}
