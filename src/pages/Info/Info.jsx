import React, { useContext, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Navigate } from "react-router-dom";
import { CoordContext } from "../../context/CoordContext";
import CenterMap from "../../helper/map/CenterMap";
import Navbar from "../../components/Navbar/Navbar";
import MapRouting from "../../helper/map/MapRouting";
import Details from "../../components/Details/Details";

const Info = () => {
  const { coordinates } = useContext(CoordContext);
  const [summary, setSummary] = useState({});
  const pdfRef = useRef(null);

  return (
    <main className="info">
      <Navbar />
      {/*The only part of the page which will be downloaded */}
      <div ref={pdfRef}>
        {/*The leaflet map with adding the centering and routing */}
        {/*when refreshng the page won't be coordinates so it will navigate the user to home page with search history*/}
        {coordinates ? (
          <MapContainer
            className="mapContainer"
            center={[51, 10]}
            zoom={3}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {coordinates?.map(({ id, name, lat, lng }) => (
              <Marker key={id} position={[lat, lng]}>
                <Popup position={[lat, lng]} closeOnClick={true}>
                  <h2>{name}</h2>
                </Popup>
              </Marker>
            ))}
            {coordinates && (
              <>
                <CenterMap coordinates={coordinates} />
                <MapRouting setSummary={setSummary} />
              </>
            )}
          </MapContainer>
        ) : (
          <Navigate replace to={"/"} />
        )}
        <Details summary={summary} pdfRef={pdfRef} />
      </div>
    </main>
  );
};

export default Info;
