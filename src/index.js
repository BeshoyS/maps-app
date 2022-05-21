import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CoordContextProvider } from "./context/CoordContext";
import { SearchHistoryContextProvider } from "./context/SearchHistoryContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CoordContextProvider>
        <SearchHistoryContextProvider>
          <App />
        </SearchHistoryContextProvider>
      </CoordContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
