import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const PlacesAutoComplete = ({ setCood, placeholder, setError }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();
      // Get latitude and longitude
      getGeocode({ address: description }).then((results) => {
        try {
          const { lat, lng } = getLatLng(results[0]);
          setCood((prev) => ({ ...prev, name: description, lat, lng }));
        } catch (error) {
          setError(error.message);
        }
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  return (
    <div className="inputDiv">
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        className="input"
        placeholder={placeholder}
        required
      />
      {status === "OK" && (
        <ul className="autoSuggest">{renderSuggestions()}</ul>
      )}
    </div>
  );
};

export default PlacesAutoComplete;
