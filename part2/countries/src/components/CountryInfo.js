import React, {useEffect, useState} from 'react'
import axios from 'axios';

const CountryInfo = ({country}) => {
    // const [weather, setWeather] = useState([])

    // useEffect(() => {
    //     axios.get(`api.openweathermap.org/data/2.5/weather?q=${country.capital},${country}&appid=547e52291e55b2df3469f78ab6306918`).then((response) => {
    //       setWeather(response.data);
    //       console.log(response.data)
    //     });
    //   });

    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>Spoken Languages</h3>
            <ul>
                {country.languages.map((lang, i) => (
                    <li key={i}>{lang.name}</li>
                ))}
            </ul>
            <img src={country.flag} width="200" alt={country.name}></img>
            <h3>Weather in {country.capital}</h3>
            <p>temperature</p>
            <p>wind</p>
        </div>
    )
}

export default CountryInfo