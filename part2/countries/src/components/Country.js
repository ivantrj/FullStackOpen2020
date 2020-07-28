import React from 'react'
import Search from './components/Search'

const Country = ({country}) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            {/* <ul>
                {country.languages.map(function(language, index){
                    return <li key={index}>{language}</li>
                })}
            </ul> */}
            <img src={country.flag} alt={country.name}></img>
        </div>
    )
}

export default Country