import React, { useContext } from "react";
import DataInputs from "../../components/DataInputs/DataInputs";
import SearchHistory from "../../components/SearchHistory/SearchHistory";
import { SearchHistoryContext } from "../../context/SearchHistoryContext";

const Home = () => {
  const { history } = useContext(SearchHistoryContext);
  return (
    <main className="home">
      {history.length > 0 && <SearchHistory />}
      <DataInputs />
    </main>
  );
};

export default Home;
