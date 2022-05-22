import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CoordContext } from "../../context/CoordContext";
import { SearchHistoryContext } from "../../context/SearchHistoryContext";
import Button from "../Button/Button";

const SearchHistory = () => {
  const { history, setHistory } = useContext(SearchHistoryContext);
  const { setCoordinates } = useContext(CoordContext);
  const navigate = useNavigate();

  const handleClick = (item) => {
    setCoordinates(item);
    navigate("/info");
  };

  return (
    <div className="search-history">
      <h3>Search History</h3>
      <div className="searchItems">
        {history.length > 0 ? (
          history.map((item, index) => (
            <div
              key={index}
              className="searchItem"
              onClick={() => handleClick(item)}
            >
              <h4>From: {item[0].name}</h4>
              <h4>To: {item[1].name}</h4>
            </div>
          ))
        ) : (
          <h4>No Searches Available</h4>
        )}
      </div>
      <Button title="Clear" onClick={() => setHistory([])} />
    </div>
  );
};

export default SearchHistory;
