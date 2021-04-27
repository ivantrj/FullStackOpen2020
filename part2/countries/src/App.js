import React, { useState, useEffect } from "react";
import CountryInfo from "./components/CountryInfo";
import Country from "./components/Country";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  });


 const countriesToShow = 
  searchTerm === ""
    ? []
    : countries.filter((country) => 
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  if (countriesToShow.length === 1) {
    return (
      <div>
        Find countries <input onChange={handleChange} />
        <div>
          <CountryInfo country={countriesToShow[0]} />
        </div>
      </div>
    )
  }

  return (
    <div>
      Find countries <input onChange={handleChange} />
      <div>
        {countriesToShow.length > 10
          ? "Too many matches, specify another filter"
          : countriesToShow.map((country) => 
            <div key={country.name}>
                <Country country={country} />
            </div>)}
      </div>
    </div>
  );
};

export default App;
