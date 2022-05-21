import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CoordContext } from "../../context/CoordContext";
import { SearchHistoryContext } from "../../context/SearchHistoryContext";
import PlacesAutoComplete from "../PlacesAutoComplete/PlacesAutoComplete";
import { FaSpinner } from "react-icons/fa";

const DataInputs = () => {
  const [loading, setloading] = useState(false);
  const [startPoint, setStartPoint] = useState({
    id: "start",
    name: "",
    lat: 0,
    lng: 0,
  });
  const [endPoint, setEndPoint] = useState({
    id: "end",
    name: "",
    lat: 0,
    lng: 0,
  });
  const { error, setError, coordinates, setCoordinates } = useContext(CoordContext);
  const { setHistory } = useContext(SearchHistoryContext);
  const navigate = useNavigate();

  useEffect(()=>{
    const fullCoord = [{ ...startPoint }, { ...endPoint }];
    setCoordinates(fullCoord);
  },[startPoint,endPoint, setCoordinates])

  const getCoord = () => {
    setloading(true);
    if (error === "") {
      setloading(false);
      setError("");
      setHistory((prev) => [...prev, coordinates]);
      // setCoordinates(fullCoord);
      navigate("/info");
    } else {
      setloading(false);
    }
  };
  return (
    <section className="inputs">
      <h1 className="inpTitle">Enter Your Directions</h1>
      <PlacesAutoComplete
        setCood={setStartPoint}
        placeholder="Your Location..."
        setError={setError}
      />
      <PlacesAutoComplete
        setCood={setEndPoint}
        placeholder="Your Destination..."
        setError={setError}
      />
      <button className="btn" onClick={getCoord}>
        {loading ? <FaSpinner className="icon-spin" /> : "Get Info"}
      </button>
      {error && <p className="errMsg">{error || "No Route avaliable for your destination"}</p>}
    </section>
  );
};

export default DataInputs;
