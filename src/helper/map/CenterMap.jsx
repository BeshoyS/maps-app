import { useMap } from "react-leaflet";

const CenterMap = ({ coordinates }) => {
  const map = useMap();
  const startLatLng = [coordinates[0].lat, coordinates[0].lng];
  const endLatLng = [coordinates[1].lat, coordinates[1].lng];
  const centerArr = [
    (startLatLng[0] + endLatLng[0]) / 2,
    (startLatLng[1] + endLatLng[1]) / 2,
  ];
  //Centering the map to show the markers
  map.flyTo(centerArr);
  map.fitBounds([startLatLng, endLatLng], { maxZoom: 18, padding: [100, 100] });
  return null;
};

export default CenterMap;
