import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import CenterMap from "../../helper/map/CenterMap";
import MapRouting from "../../helper/map/MapRouting";

const Map = ({ coordinates, setSummary }) => {
  return (
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
  );
};

export default Map;
