import React, { useState, useEffect } from 'react';

const Dropdown = ({ onCountrySelect }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URI}/?ending=all`);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountryName = e.target.value;
    setSelectedCountry(selectedCountryName);
    onCountrySelect(selectedCountryName);
  };

  return (
    <div>
      <h1>Select a Country</h1>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a Country</option>
        {countries.map((country) => (
          <option key={country.cca3} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;