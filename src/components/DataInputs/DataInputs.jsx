import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CoordContext } from "../../context/CoordContext";
import { SearchHistoryContext } from "../../context/SearchHistoryContext";
import Button from "../Button/Button";
import PlacesAutoComplete from "../PlacesAutoComplete/PlacesAutoComplete";

const DataInputs = () => {
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
  const { error, setError, coordinates, setCoordinates } =
    useContext(CoordContext);
  const { setHistory } = useContext(SearchHistoryContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fullCoord = [{ ...startPoint }, { ...endPoint }];
    setCoordinates(fullCoord);
  }, [startPoint, endPoint, setCoordinates]);

  const getCoord = () => {
    if (!error) {
      setHistory((prev) => [...prev, coordinates]);
      // setCoordinates(fullCoord);
      navigate("/info");
    }
  };
  return (
    <section className="inputs" data-testid="dataInputs">
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
      <Button title="Get Info" onClick={getCoord} />
      {error && (
        <p className="errMsg" data-testid="errMsg">
          "No Route avaliable for your destination"
        </p>
      )}
    </section>
  );
};

export default DataInputs;
