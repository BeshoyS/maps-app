import React, { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Navigate } from "react-router-dom";
import { CoordContext } from "../../context/CoordContext";
import CenterMap from "../../helper/CenterMap";
import Navbar from "../../components/Navbar/Navbar";
import Details from "../../components/Details/Details";

const Info = () => {
  const { coordinates } = useContext(CoordContext);

  return (
    <main className="info">
      <Navbar />
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
          {coordinates && <CenterMap coordinates={coordinates} />}
        </MapContainer>
      ) : (
        <Navigate replace to={"/"} />
      )}
      {/* <Details/> */}
    </main>
  );
};

export default Info;
