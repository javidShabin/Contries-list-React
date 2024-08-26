// src/CountriesList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountriesList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // Fetch data from the Rest Countries API
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error('Error fetching the countries:', error);
            });
    }, []);

    return (
        <div className="countries-container">
            {countries.map(country => (
                <div key={country.cca3} className="country-card">
                    <img src={country.flags.png} alt={`${country.name.common} flag`} className="country-flag" />
                    <h3 className="country-name">{country.name.common}</h3>
                </div>
            ))}
        </div>
    );
}

export default CountriesList;
