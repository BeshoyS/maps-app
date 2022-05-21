import React from "react";
import DataInputs from "../../components/DataInputs/DataInputs";
import SearchHistory from "../../components/SearchHistory/SearchHistory";

const Home = () => {
  return (
    <main className="home">
      <SearchHistory />
      <DataInputs />
    </main>
  );
};

export default Home;
