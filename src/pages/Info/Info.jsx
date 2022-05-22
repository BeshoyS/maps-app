import React, { useContext, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { CoordContext } from "../../context/CoordContext";
import Navbar from "../../components/Navbar/Navbar";
import Map from "../../components/Map/Map";
import Details from "../../components/Details/Details";

const Info = () => {
  const { coordinates } = useContext(CoordContext);
  const [summary, setSummary] = useState({});
  const pdfRef = useRef(null);

  return (
    <main className="info">
      <Navbar />
      {/*The only part of the page which will be downloaded as pdf */}
      <div ref={pdfRef}>
        {/*when refreshng the page won't be coordinates so it will navigate the user to home page with search history*/}
        {coordinates ? (
          {
            /*The leaflet map with adding the centering and routing */
          }(<Map coordinates={coordinates} setSummary={setSummary} />)
        ) : (
          <Navigate replace to={"/"} />
        )}
        <Details summary={summary} pdfRef={pdfRef} />
      </div>
    </main>
  );
};

export default Info;
