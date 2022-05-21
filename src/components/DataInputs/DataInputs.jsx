import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CoordContext } from "../../context/CoordContext";
import { SearchHistoryContext } from "../../context/SearchHistoryContext";
import PlacesAutoComplete from "../PlacesAutoComplete/PlacesAutoComplete";

const DataInputs = () => {
  const [startPoint, setStartPoint] = useState({ id: "start",name:"", lat: 0, lng: 0 });
  const [endPoint, setEndPoint] = useState({ id: "end",name:"", lat: 0, lng: 0 });
  const [error, setError] = useState("");
  const { setCoordinates } = useContext(CoordContext);
  const {setHistory}=useContext(SearchHistoryContext);

  const navigate = useNavigate();

  const getCoord = () => {
    const fullCoord = [{ ...startPoint }, { ...endPoint }];
    setError("")
    setCoordinates(fullCoord);
    setHistory(prev=> ([...prev,fullCoord]))
    navigate("/info");
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
        Get Info
      </button>
      {error && <p className="errMsg">{error}</p>}
    </section>
  );
};

export default DataInputs;
