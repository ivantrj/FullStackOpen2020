import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Country from './components/Country'
import axios from 'axios';

const App = () => {
const [countries, setCountries] = useState([])
const [search, setSearch] = useState('')

useEffect(() => {
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
})

const filteredCountries = countries.filter(country => {
  return country.name.toLowerCase().includes(search.toLowerCase())
})

  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      {filteredCountries.map((country) =>
        <Country country={country} key={country.alpha3Code}/>
      )}
    </div>
  );
}

export default App;
