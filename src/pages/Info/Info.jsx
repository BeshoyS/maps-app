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
        {coordinates ? (
          <Map coordinates={coordinates} setSummary={setSummary} />
        ) : (
          <Navigate replace to={"/"} />
        )}
        <Details summary={summary} pdfRef={pdfRef} />
      </div>
    </main>
  );
};

export default Info;
