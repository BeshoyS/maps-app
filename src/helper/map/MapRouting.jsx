import { useContext, useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { CoordContext } from "../../context/CoordContext";

const MapRouting = ({ setSummary }) => {
  const { coordinates, setError } = useContext(CoordContext);
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const waypoints = [
      [coordinates[0].lat, coordinates[0].lng],
      [coordinates[1].lat, coordinates[1].lng],
    ];
    //Get the Route line between the two locations
    const routingControl = L.Routing.control({
      waypoints,
      router: L.Routing.mapbox(
        "pk.eyJ1IjoiYmVzaG9vMjMiLCJhIjoiY2wzZzFrcDBlMDM2dDNpcGt4Ymw2YWEyeSJ9.skcytrO8Klv7w63hLr8rWw"
      ),
      lineOptions: {
        styles: [{ color: "#64ba9e", opacity: 0.8, weight: 6 }],
      },
      show: false,
      routeWhileDragging: true,
    }) // Get the summary (Distance and duration) for the trip
      .on("routesfound", function (e) {
        const summary = e.routes[0].summary;
        setSummary(summary);
      })
      .addTo(map)
      .on("routingerror", function (e) {
        console.log(e);
        e.error.status === "NoRoute"
          ? setError("No Route Avaliable By Car, Try A diffrenet destination")
          : setError("");
      });

    return () => map.removeLayer(routingControl);
  }, [map, coordinates, setSummary, setError]);

  return null;
};

export default MapRouting;
