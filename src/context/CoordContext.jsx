import { createContext, useState } from "react";

export const CoordContext = createContext([]);

export function CoordContextProvider({ children }) {
  const [coordinates, setCoordinates] = useState(null);

  return (
    <CoordContext.Provider value={{ coordinates, setCoordinates }}>
      {children}
    </CoordContext.Provider>
  );
}
