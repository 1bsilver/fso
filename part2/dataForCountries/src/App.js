import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";

const App = () => {
  const [Data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log("promise fulfilled");
      setData(response.data);
    });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const countries2show = Data.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log("render", Data.length, "Data");

  return (
    <div>
      <div>
        find countries
        <input value={search} onChange={handleSearch} />
      </div>

      <Filter allCountries={countries2show} search={search} />
    </div>
  );
};

export default App;
